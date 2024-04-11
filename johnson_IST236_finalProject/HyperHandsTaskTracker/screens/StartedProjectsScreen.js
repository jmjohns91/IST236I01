import { Colors, Fonts, styles } from '../constants/index';
import * as util from '../index'

export const StartedProjectsScreen = () => {
  const navigation = util.useNavigation();
  const [projects, setProjects] = util.useState([]);
  const [selectedPhoto, setSelectedPhoto] = util.useState(null);
  const { width, height } = util.useWindowDimensions();
  util.useEffect(() => {
    const fetchProjects = async () => {
      let storedData = await util.AsyncStorage.getItem('@projectIDs');
      let projectIDs = [];
      if (storedData !== null) {
        projectIDs = JSON.parse(storedData);
      }

      const projectPromises = projectIDs.map(projectID => util.AsyncStorage.getItem(`@project_${projectID}`));
      const projectData = await Promise.all(projectPromises);
      let projects = projectData.map(data => JSON.parse(data));

      projects.sort((a, b) => {
        if (a.completed === b.completed) {
          return new Date(b.createdDate) - new Date(a.createdDate);
        } else if (a.completed) {
          return 1;
        } else {
          return -1;
        }
      });

      setProjects(projects);
    };

    fetchProjects();
  }, []);

  const handleMarkProgress = (projectID) => {
    setProjects(prevProjects => {
      const updatedProjects = prevProjects.map(project =>
        project.projectID === projectID
          ? { ...project, lastMarkedProgressDate: new Date() }
          : project
      );
      updatedProjects.forEach(async project => {
        await util.AsyncStorage.setItem(`@project_${project.projectID}`, JSON.stringify(project));
      });
      return updatedProjects;
    });
  };
  const handleMarkComplete = (projectID) => {
    util.Alert.alert(
      "Mark Project as Complete",
      "Are you sure you want to mark this project as complete?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            setProjects(prevProjects => {
              const updatedProjects = prevProjects.map(project =>
                project.projectID === projectID
                  ? { ...project, completed: true }
                  : project
              );
              updatedProjects.forEach(async project => {
                await util.AsyncStorage.setItem(`@project_${project.projectID}`, JSON.stringify(project));
              });
              return updatedProjects;
            });
          }
        }
      ]
    );
  };
  const handleReopenProject = async (projectID) => {
    setProjects(prevProjects => {
      const updatedProjects = prevProjects.map(project =>
        project.projectID === projectID
          ? { ...project, completed: false }
          : project
      );
      updatedProjects.forEach(async project => {
        await util.AsyncStorage.setItem(`@project_${project.projectID}`, JSON.stringify(project));
      });
      return updatedProjects;
    });
  };

  const handleDelete = async (projectID) => {
    util.Alert.alert(
      "Delete Project",
      "Are you sure you want to delete this project?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: async () => {
            setProjects(prevProjects => {
              const updatedProjects = prevProjects.filter(project => project.projectID !== projectID);
              updatedProjects.forEach(async project => {
                await util.AsyncStorage.setItem(`@project_${project.projectID}`, JSON.stringify(project));
              });
              return updatedProjects;
            });
          }
        }
      ]
    );
  };

  const handleEdit = (projectID) => {
    navigation.navigate('ProjectDetailsScreen', { projectID: projectID });
  };
  const handleViewPhoto = async (photoId) => {
    const projects = JSON.parse(await util.AsyncStorage.getItem('projects'));
    const photo = projects.flatMap(project => project.photos).find(photo => photo.projectID === photoId);
    setSelectedPhoto(photo);
  };

  const handleRemovePhoto = async (projectID, photoId) => {
    let projects = JSON.parse(await util.AsyncStorage.getItem('projects'));
    projects = projects.map(project =>
      project.projectID === projectID
        ? { ...project, photos: project.photos.filter(photo => photo.projectID !== photoId) }
        : project
    );
    await util.AsyncStorage.setItem('projects', JSON.stringify(projects));
    setProjects(projects);
  };

  const handleAddNewProject = () => {
    navigation.navigate('ProjectDetailsScreen');
  };
  return (
    <util.View style={styles.projectsContainer}>
      <util.ScrollView>
        {projects.map((project) => (
          <util.View
            key={project.projectID}
            style={[styles.projectCard, { opacity: project.completed ? 0.5 : 1 }]}
          ><util.View style={styles.projectHeader}>
              <util.Entypo name={project.projectIcon} size={height / 15} color={Colors.primaryVariant} padding={5} />
              <util.Text style={styles.projectTitle}>{project.projectTitle}</util.Text></util.View>
            <util.Text style={styles.projectContents}>{project.projectContents}</util.Text>
            {/* {project.photos.map((photo) => (
              <util.View key={photo.projectID} style={styles.photoContainer}>
                <util.Image source={{ uri: photo.uri }} style={styles.photo} />
            <util.Pressable style={styles.blueButton} onPress={() => handleViewPhoto(photo)}> <util.Text style={styles.buttonText}>View Photo</util.Text></util.Pressable>
            <util.Pressable style={styles.redButton} onPress={() => handleRemovePhoto(project.projectID, photo.projectID)}> <util.Text style={styles.buttonText}>Remove Photo</util.Text></util.Pressable>
          </util.View> 
        ))}*/}
            <util.View style={styles.buttonRow}>
              <util.Pressable style={styles.greenButton} onPress={() => handleMarkProgress(project.projectID)}>
                <util.Text style={styles.buttonText}>Mark Progress</util.Text>
              </util.Pressable>
              <util.Pressable style={styles.greenButton} onPress={() => handleMarkComplete(project.projectID)}>
                <util.Text style={styles.buttonText}>Mark Complete</util.Text>
              </util.Pressable>
              <util.Pressable style={styles.redButton} onPress={() => handleDelete(project.projectID)}>
                <util.Text style={styles.buttonText}>Delete</util.Text>
              </util.Pressable>
              <util.Pressable style={styles.blueButton} onPress={() => handleEdit(project.projectID)}>
                <util.Text style={styles.buttonText}>Edit</util.Text>
              </util.Pressable>
            </util.View>
            {project.completed && (
              <util.Pressable style={styles.blueButton} onPress={() => handleReopenProject(project.projectID)}>
                <util.Text style={styles.buttonText}>Reopen Project</util.Text>
              </util.Pressable>
            )}
          </util.View>
        ))
        }
      </util.ScrollView >
      <util.Pressable style={[styles.greenButton, styles.bigButton]} title="Add New Project" onPress={handleAddNewProject}><util.Text style={styles.bigButtonText}>Add New Project</util.Text></util.Pressable>
      <util.Modal
        animationType="slide"
        transparent={true}
        visible={selectedPhoto !== null}
        onRequestClose={() => setSelectedPhoto(null)}
      >
      </util.Modal>
    </util.View >
  );
};


