import { Colors, Fonts, styles } from '../constants/index';
import * as util from '../index'

export const ProjectIdeasScreen = () => {
  const navigation = util.useNavigation();
  const [ideas, setIdeas] = util.useState([]);

  const { width, height } = util.useWindowDimensions();
  const fetchIdeas = async () => {
    let storedData = await util.AsyncStorage.getItem('@ideaIDs');
    let ideaIDs = [];
    if (storedData !== null) {
      ideaIDs = JSON.parse(storedData);
    }

    const ideaPromises = ideaIDs.map(ideaID => util.AsyncStorage.getItem(`@idea_${ideaID}`));
    const ideaData = await Promise.all(ideaPromises);
    let ideas = ideaData.map(data => JSON.parse(data));

    ideas.sort((a, b) => {
      if (a === b) {
        return new Date(b.createdDate) - new Date(a.createdDate);
      } else if (a) {
        return 1;
      } else {
        return -1;
      }
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
            e
            await util.AsyncStorage.setItem('@ideaIDs', JSON.stringify(updatedIdeaIDs));
          }
        }
      ]
    );
  };
  const handleEdit = (ideaID) => {
    navigation.navigate('IdeaDetailScreen', { ideaID: ideaID });
  };
  const handleAddNewIdea = () => {
    navigation.navigate('IdeaDetailScreen');
  };
  return (
    <util.View style={styles.projectsContainer}>
      <util.ScrollView>
        {ideas.map((idea) => (
          <util.View
            key={idea.ideaID}
            style={styles.projectCard}
          ><util.View style={styles.projectHeader}>
              <util.Entypo name={idea.ideaIcon} size={height / 15} color={Colors.primaryVariant} padding={5} />
              <util.Text style={styles.projectTitle}>{idea.ideaTitle}</util.Text></util.View>
            <util.View style={styles.buttonRow}>
              <util.Pressable style={styles.redButton} onPress={() => handleDelete(idea.ideaID)}>
                <util.Text style={styles.buttonText}>Delete</util.Text>
              </util.Pressable>
              <util.Pressable style={styles.blueButton} onPress={() => handleEdit(idea.ideaID)}>
                <util.Text style={styles.buttonText}>Edit</util.Text>
              </util.Pressable>
            </util.View>
          </util.View>
        ))
        }
      </util.ScrollView >
      <util.Pressable style={[styles.greenButton, styles.bigButton]} title="Add New Idea" onPress={handleAddNewIdea}><util.Text style={styles.bigButtonText}>Add New Idea</util.Text></util.Pressable>
    </util.View >
  );
}