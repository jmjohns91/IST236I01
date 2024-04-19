import { Colors, Fonts, styles } from '../constants/index';
import * as util from '../index'
import { IconPicker } from '../components/modals/IconPicker';
export const IdeaDetailScreen = ({ route, navigation }) => {
  const [ideaID, setIdeaID] = util.useState('');
  const [icon, setIcon] = util.useState("plus");
  const [ideaIcon, setIdeaIcon] = util.useState(null);
  const [ideaTitle, setIdeaTitle] = util.useState('');
  const [createdDate, setCreatedDate] = util.useState(new Date());
  const [showIconPicker, setShowIconPicker] = util.useState(true);
  const changeIcon = (newIcon) => {
    setIdeaIcon(newIcon);
  };
  const insets = util.useSafeAreaInsets();
  const { width, height } = util.useWindowDimensions();

  const removeIcon = () => {
    setIdeaIcon(null);
  };


  const saveIdea = async () => {
    const ideaData = {
      ideaID,
      ideaIcon,
      ideaTitle,
      createdDate,
    };

    await util.AsyncStorage.setItem(`@idea_${ideaID}`, JSON.stringify(ideaData));

    let storedData = await util.AsyncStorage.getItem('@ideaIDs');
    let ideaIDs = [];
    if (storedData !== null) {
      ideaIDs = JSON.parse(storedData);
    }
    if (!ideaIDs.includes(ideaID)) {
      ideaIDs.push(ideaID);
    }
    await util.AsyncStorage.setItem('@ideaIDs', JSON.stringify(ideaIDs));

    navigation.goBack();
  };
  util.useEffect(() => {
    const fetchIdea = async () => {
      const ideaID = route.params.ideaID;
      if (ideaID) {
        const storedData = await util.AsyncStorage.getItem(`@idea_${ideaID}`);
        if (storedData !== null) {
          const idea = JSON.parse(storedData);
          setIdeaID(idea.ideaID);
          setIdeaIcon(idea.ideaIcon);
          setIdeaTitle(idea.ideaTitle);
          setCreatedDate(new Date(idea.createdDate));
        }
      } else {
        setCreatedDate(new Date());
        setIdeaID(util.uuidv4());
      }
    };

    fetchIdea();
  }, []);
  return (
    <util.SafeAreaProvider style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      width: width, flex: 1,
    }}>
      <util.View style={styles.detailsContainer}>
        <util.ScrollView style={styles.scrollContainer}>
          <util.View style={styles.topContainer}>
            <util.View style={styles.rowContainer}>
              <util.View style={styles.projectIconContainer}>
                <util.Text style={styles.label}>Idea Icon</util.Text>
                {showIconPicker && (
                  <IconPicker onIconPicked={changeIcon} currentIcon={icon} />)}
                <util.Pressable style={[styles.redButton, styles.iconButton]} onPress={removeIcon}>
                  <util.Text style={styles.buttonText}>Remove</util.Text>
                </util.Pressable>
              </util.View>
              <util.View style={styles.titleContainer}>
                <util.Text style={styles.label}>Idea Title</util.Text>
                <util.TextInput style={styles.inputTitle}
                  placeholder="Idea Title"
                  onChangeText={text => setIdeaTitle(text)}
                  defaultValue={ideaTitle} />
              </util.View>
            </util.View>
          </util.View>
        </util.ScrollView>
        <util.View style={styles.buttonContainer}>
          <util.Pressable style={styles.saveButton} onPress={saveIdea}>
            <util.Text style={styles.bigButtonText}>Save</util.Text>
          </util.Pressable>
          <util.Pressable style={[styles.cancelButton, { backgroundColor: Colors.error }]} onPress={() => navigation.goBack()}>
            <util.Text style={styles.bigButtonText}>Cancel</util.Text>
          </util.Pressable>
        </util.View>
      </util.View>
    </util.SafeAreaProvider>
  );
}