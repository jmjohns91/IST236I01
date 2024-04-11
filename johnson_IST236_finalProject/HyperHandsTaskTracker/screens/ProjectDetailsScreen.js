import { Colors, Fonts, styles } from '../constants/index';
import * as util from '../index'
import { IconPicker } from '../components';
import * as ImagePicker from 'expo-image-picker';

export const ProjectDetailsScreen = ({ route, navigation }) => {
  const [projectID, setProjectID] = util.useState('');
  const [icon, setIcon] = util.useState(null);
  const [projectIcon, setProjectIcon] = util.useState(null);
  const [projectTitle, setProjectTitle] = util.useState('');
  const [projectContents, setProjectContents] = util.useState('');
  const [photos, setPhotos] = util.useState([]);
  const [createdDate, setCreatedDate] = util.useState(new Date());
  const [lastEditedDate, setLastEditedDate] = util.useState(new Date());
  const [lastMarkedProgressDate, setLastMarkedProgressDate] = util.useState(new Date());
  const [showIconPicker, setShowIconPicker] = util.useState(false);
  const changeIcon = (newIcon) => {
    setIcon(newIcon);
  };
  const insets = util.useSafeAreaInsets();
  const { width, height } = util.useWindowDimensions();

  const removeIcon = () => {
    setProjectIcon(null);
  };

  const addPhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setPhotos([...photos, result.uri]);
      }
    }
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
      const projectID = route.params.projectID;
      if (projectID) {
        const storedData = await util.AsyncStorage.getItem(`@project_${projectID}`);
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
        setProjectID(util.uuidv4());
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
                <IconPicker onIconPicked={changeIcon} currentIcon={projectIcon} />
                <util.Pressable style={[styles.redButton, styles.iconButton]} onPress={removeIcon}>
                  <util.Text style={styles.buttonText}>Remove</util.Text>
                </util.Pressable>
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
              <util.View style={styles.photoPicker}>
                <util.Text style={styles.label}>Add Photo</util.Text>
                <util.Pressable onPress={addPhoto}>
                  <util.Entypo name={"plus"} size={60} color={Colors.primary} />
                </util.Pressable>
              </util.View>
              {photos?.length > 0 && (
                <util.View style={styles.photoGrid}>
                  {photos?.map((photo, index) => {
                    console.log(photo);
                    return (
                      <util.Image key={index} source={{ uri: photo }} style={styles.photo} />
                    );
                  })}
                </util.View>
              )}
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
          <util.Pressable style={[styles.cancelButton, { backgroundColor: Colors.error }]} onPress={() => navigation.goBack()}>
            <util.Text style={styles.bigButtonText}>Cancel</util.Text>
          </util.Pressable>
        </util.View>
      </util.View>
    </util.SafeAreaProvider>
  );
};

