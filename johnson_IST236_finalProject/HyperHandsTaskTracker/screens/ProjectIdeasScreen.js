import { Colors, Fonts, styles, icons } from '../constants/index';
import * as util from '../index'
import { IconRenderer } from '../components/layout/IconRender';

export const ProjectIdeasScreen = () => {
  const navigation = util.useNavigation();
  const [ideas, setIdeas] = util.useState([]);
  const { width, height } = util.useWindowDimensions();
  const fetchIdeas = async () => {
    const keys = await util.AsyncStorage.getAllKeys();
    const ideaKeys = keys.filter(key => key.startsWith('@idea_'));
    const ideaData = await util.AsyncStorage.multiGet(ideaKeys);
    const ideas = ideaData.map(item => JSON.parse(item[1]));
    ideas.sort((a, b) => {
      const dateA = new Date(a.createdDate);
      const dateB = new Date(b.createdDate);
      if (dateA.getTime() !== dateB.getTime()) {
        return dateB.getTime() - dateA.getTime();
      }

      const editDateA = new Date(a.lastEditedDate);
      const editDateB = new Date(b.lastEditedDate);
      return editDateB.getTime() - editDateA.getTime();
    });

    setIdeas(ideas);
  };

  util.useEffect(() => {
    fetchIdeas();
  }, []);

  util.useFocusEffect(
    util.useCallback(() => {
      fetchIdeas();
    }, [])
  );


  const handleDelete = async (ideaID) => {
    util.Alert.alert(
      "Delete Idea",
      "Are you sure you want to delete this idea?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: async () => {
            setIdeas(prevIdeas => {
              const updatedIdeas = prevIdeas.filter(idea => idea.ideaID !== ideaID);
              return updatedIdeas;
            });
            await util.AsyncStorage.removeItem(`@idea_${ideaID}`);

            let storedData = await util.AsyncStorage.getItem('@ideaIDs');
            let ideaIDs = [];
            if (storedData !== null) {
              ideaIDs = JSON.parse(storedData);
            }

            const updatedIdeaIDs = ideaIDs.filter(id => id !== ideaID);
            await util.AsyncStorage.setItem('@ideaIDs', JSON.stringify(updatedIdeaIDs));
          }
        }
      ]
    );
  };

  const handleEdit = (ideaID) => {
    navigation.navigate('IdeaDetailsScreen', { ideaID });
  };

  const handleMakeProject = (ideaID) => {
    const selectedIdea = ideas.find(idea => idea.ideaID === ideaID);
    if (selectedIdea) {
      navigation.navigate('ProjectDetailsScreen', {
        ideaID: selectedIdea.ideaID,
        ideaIcon: selectedIdea.ideaIcon,
        ideaTitle: selectedIdea.ideaTitle,
        isNewProject: true
      });
    }
  };

  const handleAddNewIdea = () => {
    navigation.navigate('IdeaDetailsScreen', {});
  };
  return (
    <util.View style={styles.projectsContainer}>
      <util.ScrollView>
        {ideas.map((idea) => (
          <util.View
            key={idea.ideaID}
            style={styles.projectCard}
          >
            <util.View style={styles.projectHeader}>
              <IconRenderer iconName={idea.ideaIcon ? idea.ideaIcon.name : ''} iconLibrary={idea.ideaIcon ? idea.ideaIcon.library : ''} size={height / 15} color={Colors.primaryVariant} padding={5} />
              <util.Text style={styles.projectTitle}>{idea.ideaTitle}</util.Text>
            </util.View>

            <util.View style={styles.buttonRow}>
              <util.Pressable style={[styles.greenButton, styles.ideaButton]} onPress={() => handleMakeProject(idea.ideaID)}>
                <util.Text style={styles.buttonText}>Make Project</util.Text>
              </util.Pressable>
              <util.Pressable style={[styles.redButton, styles.ideaButton]} onPress={() => handleDelete(idea.ideaID)}>
                <util.Text style={styles.buttonText}>Delete</util.Text>
              </util.Pressable>
              <util.Pressable style={[styles.blueButton, styles.ideaButton]} onPress={() => handleEdit(idea.ideaID)}>
                <util.Text style={styles.buttonText}>Edit</util.Text>
              </util.Pressable>
            </util.View>
          </util.View>
        ))}
      </util.ScrollView>
      <util.Pressable style={[styles.greenButton, styles.bigButton]} title="Add New Idea" onPress={handleAddNewIdea}>
        <util.Text style={styles.bigButtonText}>Add New Idea</util.Text>
      </util.Pressable>
    </util.View>
  );
};

