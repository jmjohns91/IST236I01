import { Colors, Fonts, styles } from '../constants/index';
import * as util from '../index'


export const ProjectDetailsScreen = ({ route, navigation }) => {
  const [projectID, setProjectID] = util.useState('');
  const [selectedIcon, setSelectedIcon] = util.useState(null);
  const [projectIcon, setProjectIcon] = util.useState(null);
  const [projectTitle, setProjectTitle] = util.useState('');
  const [projectContents, setProjectContents] = util.useState('');
  const [photos, setPhotos] = util.useState([]);
  const [createdDate, setCreatedDate] = util.useState(new Date());
  const [lastEditedDate, setLastEditedDate] = util.useState(new Date());
  const [lastMarkedProgressDate, setLastMarkedProgressDate] = util.useState(new Date());
  const [showIconPicker, setShowIconPicker] = util.useState(false);
  const onSelect = (icon) => {
    setShowIconPicker(false);
  };
  const insets = util.useSafeAreaInsets();
  const { width, height } = util.useWindowDimensions();

  const removeIcon = () => {
    setProjectIcon(null);
  };

  const addPhoto = () => {
    util.ImagePicker.showImagePicker({}, (response) => {
      if (!response.didCancel && !response.error) {
        setPhotos([...photos, response.uri]);
      }
    });
  };

  const saveProject = async () => {
    const projectData = {
      projectID,
      projectIcon,
      projectTitle,
      projectContents,
      photos,
      createdDate,
      lastEditedDate: new Date(),
      lastMarkedProgressDate,
      completed: false,
    };

    await util.AsyncStorage.setItem(`@project_${projectID}`, JSON.stringify(projectData));

    let storedData = await util.AsyncStorage.getItem('@projectIDs');
    let projectIDs = [];
    if (storedData !== null) {
      projectIDs = JSON.parse(storedData);
    }
    if (!projectIDs.includes(projectID)) {
      projectIDs.push(projectID);
    }
    await util.AsyncStorage.setItem('@projectIDs', JSON.stringify(projectIDs));

    navigation.goBack();
  };
  util.useEffect(() => {
    const fetchProject = async () => {
      const projectId = navigation.getParam('projectId');
      if (projectId) {
        const storedData = await util.AsyncStorage.getItem(`@project_${projectId}`);
        if (storedData !== null) {
          const project = JSON.parse(storedData);
          setProjectID(project.projectID);
          setProjectIcon(project.projectIcon);
          setProjectTitle(project.projectTitle);
          setProjectContents(project.projectContents);
          setPhotos(project.photos);
          setCreatedDate(new Date(project.createdDate));
          setLastEditedDate(new Date(project.lastEditedDate));
          setLastMarkedProgressDate(new Date(project.lastMarkedProgressDate));
        }
      } else {
        setCreatedDate(new Date());
        setProjectID(uuidv4());
      }
    };

    fetchProject();
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
                <util.Text style={styles.label}>Project Icon</util.Text>
                <util.View style={styles.iconButtons}>
                  {/* <IconPicker
                    showIconPicker={this.state.showIconPicker}
                    toggleIconPicker={() => this.setState({ showIconPicker: !this.state.showIconPicker })}
                    iconDetails={[
                      { family: "AntDesign", color: "blue", icons: ["wallet"] },
                      { family: "Entypo", icons: ["wallet"] },
                      { family: "FontAwesome", icons: ["google-wallet"] },
                      { family: "FontAwesome5", icons: ["wallet"] },
                      { family: "Fontisto", icons: ["wallet"] },
                      {
                        family: "MaterialCommunityIcons",
                        icons: ["wallet-membership"]
                      },
                      { family: "MaterialIcons", icons: ["wallet-travel"] }
                    ]
                    }
                    content={<util.Text>Change Icon</util.Text>}
                    selectedIcon={selectedIcon}
                    onSelect={onSelect}
                  /> */}
                  <util.Pressable style={styles.blueButton} onPress={changeIcon}>
                    <util.Text style={styles.buttonText}>Change</util.Text>
                  </util.Pressable>
                  <util.Pressable style={styles.redButton} onPress={removeIcon}>
                    <util.Text style={styles.buttonText}>Remove</util.Text>
                  </util.Pressable>
                </util.View>
              </util.View>
              <util.View style={styles.titleContainer}>
                <util.Text style={styles.label}>Project Title</util.Text>
                <util.TextInput style={styles.inputTitle}
                  placeholder="Project Title"
                  onChangeText={text => setProjectTitle(text)}
                  defaultValue={projectTitle} />
              </util.View>
            </util.View>
            <util.View style={styles.photoContainer}>
              <util.Text style={styles.label}>Add Photo</util.Text>
              <util.Pressable style={styles.button} onPress={addPhoto}>
                <util.Text style={styles.button}>Add Photo</util.Text>
              </util.Pressable>
            </util.View>
          </util.View>
          <util.View style={styles.contentsContainer}>
            <util.Text style={styles.label}>Project Contents</util.Text>
            <util.TextInput
              style={styles.inputContents}
              placeholder="Project Contents"
              onChangeText={text => setProjectContents(text)}
              defaultValue={projectContents}
              numberOfLines={30}
              multiline />
          </util.View>
        </util.ScrollView>
        <util.View style={styles.buttonContainer}>
          <util.Pressable style={styles.saveButton} onPress={saveProject}>
            <util.Text style={styles.bigButtonText}>Save</util.Text>
          </util.Pressable>
          <util.Pressable style={[styles.cancelButton, { backgroundColor: colors.error }]} onPress={() => navigation.goBack()}>
            <util.Text style={styles.bigButtonText}>Cancel</util.Text>
          </util.Pressable>
        </util.View>
      </util.View>
    </util.SafeAreaProvider>
  );
};

