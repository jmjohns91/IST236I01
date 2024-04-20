import { Colors, Fonts, styles, icons } from '../constants/index';
import * as util from '../index'
import { IconRenderer } from '../components/layout/IconRender';

export const StartedProjectsScreen = () => {
  const navigation = util.useNavigation();
  const [projects, setProjects] = util.useState([]);
  const [selectedPhoto, setSelectedPhoto] = util.useState(null);
  const { width, height } = util.useWindowDimensions();
  const imageUrls = selectedPhoto ? [{ url: selectedPhoto }] : [];
  const fetchProjects = async () => {
    const keys = await util.AsyncStorage.getAllKeys();
    const projectKeys = keys.filter(key => key.startsWith('@project_'));
    const projectData = await util.AsyncStorage.multiGet(projectKeys);
    const projects = projectData.map(item => JSON.parse(item[1]));
    projects.sort((a, b) => {
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }
      const dateA = new Date(a.createdDate);
      const dateB = new Date(b.createdDate);
      if (dateA.getTime() !== dateB.getTime()) {
        return dateB.getTime() - dateA.getTime();
      }

      const editDateA = new Date(a.lastEditedDate);
      const editDateB = new Date(b.lastEditedDate);
      return editDateB.getTime() - editDateA.getTime();
    });

    setProjects(projects);
  };

  util.useEffect(() => {
    console.log('Fetching projects on mount...');
    fetchProjects();
  }, []);

  util.useFocusEffect(
    util.useCallback(() => {
      console.log('Refetching projects on focus...');
      fetchProjects();
    }, [])
  );

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
              return updatedProjects;
            });
            await util.AsyncStorage.removeItem(`@project_${projectID}`);

            let storedData = await util.AsyncStorage.getItem('@projectIDs');
            let projectIDs = [];
            if (storedData !== null) {
              projectIDs = JSON.parse(storedData);
            }

            const updatedProjectIDs = projectIDs.filter(id => id !== projectID);
            await util.AsyncStorage.setItem('@projectIDs', JSON.stringify(updatedProjectIDs));
          }
        }
      ]
    );
  };

  const handleEdit = (projectID) => {
    navigation.navigate('ProjectDetailsScreen', { projectID });
  };
  const handleViewPhoto = (photoUri) => {
    setSelectedPhoto(photoUri);
  };

  const handleRemovePhoto = (projectID, photoIndex) => {
    util.Alert.alert(
      "Confirm Remove",
      "Are you sure you want to remove this photo?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK", onPress: async () => {
            let updatedProjects = projects.map(project => {
              if (project.projectID === projectID) {
                let newPhotos = [...project.photos];
                newPhotos.splice(photoIndex, 1);  // Remove the photo by index
                return { ...project, photos: newPhotos };
              }
              return project;
            });
            await util.AsyncStorage.setItem('projects', JSON.stringify(updatedProjects)); // Save to AsyncStorage
            setProjects(updatedProjects);  // Update state
          }
        }
      ]
    );
  };

  const handleAddNewProject = () => {
    navigation.navigate('ProjectDetailsScreen', {});
  };
  return (
    <util.View style={styles.projectsContainer}>
      <util.ScrollView>
        {projects.map((project) => (
          <util.View
            key={project.projectID}
            style={styles.projectCard}
          ><util.View style={styles.projectHeader}>
              <IconRenderer iconName={project.projectIcon.name} iconLibrary={project.projectIcon.library} size={height / 15} color={Colors.primaryVariant} padding={5} />
              <util.Text style={styles.projectTitle}>{project.projectTitle}</util.Text></util.View>
            <util.Text style={styles.projectContents}>{project.projectContents}</util.Text>
            {project.photos.map((photoUri, photoIndex) => (
              <util.View key={`${project.projectID}-${photoIndex}`} style={styles.photoContainer}>
                <util.Image source={{ uri: photoUri }} style={styles.photo} />
                <util.Pressable style={styles.blueButton} onPress={() => handleViewPhoto(photoUri)}>
                  <util.Text style={styles.buttonText}>View Photo</util.Text>
                </util.Pressable>
                <util.Pressable style={styles.redButton} onPress={() => handleRemovePhoto(project.projectID, photoIndex)}>
                  <util.Text style={styles.buttonText}>Remove Photo</util.Text>
                </util.Pressable>
              </util.View>
            ))}
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
              <>
                <util.View style={[styles.overlay, { zIndex: 3 }]} />
                <util.Pressable
                  style={[styles.blueButton, styles.centeredButton, { zIndex: 4 }]}
                  onPress={() => handleReopenProject(project.projectID)}
                >
                  <util.Text style={styles.buttonText}>Reopen Project</util.Text>
                </util.Pressable>
              </>
            )}
          </util.View>
        ))}
      </util.ScrollView>
      <util.Pressable style={[styles.greenButton, styles.bigButton]} title="Add New Project" onPress={handleAddNewProject}><util.Text style={styles.bigButtonText}>Add New Project</util.Text></util.Pressable>
      {selectedPhoto && (
        <util.Modal
          visible={!!selectedPhoto}
          transparent={true}
          onRequestClose={() => setSelectedPhoto(null)}
        >
          <util.ImageViewer
            imageUrls={imageUrls}
            enableSwipeDown={true}
            onSwipeDown={() => setSelectedPhoto(null)}
            saveToLocalByLongPress={false}
          />
          <util.Pressable
            style={styles.closeModalButton}
            onPress={() => setSelectedPhoto(null)}
          >
            <util.Text style={styles.buttonText}>Close</util.Text>
          </util.Pressable>
        </util.Modal>
      )}
    </util.View>
  );
};

