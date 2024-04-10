import { Colors, Fonts, styles } from '../constants/index';
import * as util from '../index'

export const StartedProjectsScreen = () => {
  const navigation = util.useNavigation();
  const [projects, setProjects] = util.useState([]);
  const [selectedPhoto, setSelectedPhoto] = util.useState(null);

  util.useEffect(() => {
    const fetchProjects = async () => {
      let storedData = await util.AsyncStorage.getItem('@projectIDs');
      let projectIDs = [];
      if (storedData !== null) {
        projectIDs = JSON.parse(storedData);
      }

      const projectPromises = projectIDs.map(id => util.AsyncStorage.getItem(`@project_${id}`));
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

  const handleMarkProgress = (projectId) => {
    setProjects(prevProjects => {
      const updatedProjects = prevProjects.map(project =>
        project.projectId === projectId
          ? { ...project, lastMarkedProgressDate: new Date() }
          : project
      );
      updatedProjects.forEach(async project => {
        await util.AsyncStorage.setItem(`@project_${project.projectId}`, JSON.stringify(project));
      });
      return updatedProjects;
    });
  };
  const handleMarkComplete = (projectId) => {
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
                project.projectId === projectId
                  ? { ...project, completed: true }
                  : project
              );
              updatedProjects.forEach(async project => {
                await util.AsyncStorage.setItem(`@project_${project.projectId}`, JSON.stringify(project));
              });
              return updatedProjects;
            });
          }
        }
      ]
    );
  };
  const handleReopenProject = async (projectId) => {
    setProjects(prevProjects => {
      const updatedProjects = prevProjects.map(project =>
        project.projectId === projectId
          ? { ...project, completed: false }
          : project
      );
      updatedProjects.forEach(async project => {
        await util.AsyncStorage.setItem(`@project_${project.projectId}`, JSON.stringify(project));
      });
      return updatedProjects;
    });
  };

  const handleDelete = async (projectId) => {
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
              const updatedProjects = prevProjects.filter(project => project.projectId !== projectId);
              updatedProjects.forEach(async project => {
                await util.AsyncStorage.setItem(`@project_${project.projectId}`, JSON.stringify(project));
              });
              return updatedProjects;
            });
          }
        }
      ]
    );
  };

  const handleEdit = (projectId) => {
    navigation.navigate('ProjectDetailsScreen', { projectId: projectId });
  };

  const handleViewPhoto = async (photoId) => {
    const projects = JSON.parse(await util.AsyncStorage.getItem('projects'));
    const photo = projects.flatMap(project => project.photos).find(photo => photo.id === photoId);
    setSelectedPhoto(photo);
  };

  const handleRemovePhoto = async (projectId, photoId) => {
    let projects = JSON.parse(await util.AsyncStorage.getItem('projects'));
    projects = projects.map(project =>
      project.projectId === projectId
        ? { ...project, photos: project.photos.filter(photo => photo.id !== photoId) }
        : project
    );
    await util.AsyncStorage.setItem('projects', JSON.stringify(projects));
    setProjects(projects);
  };

  const handleAddNewProject = async () => {
    let projects = JSON.parse(await util.AsyncStorage.getItem('projects'));
    const newProject = { /* new project details */ };
    projects.push(newProject);
    await util.AsyncStorage.setItem('projects', JSON.stringify(projects));
    navigation.navigate('ProjectDetailsScreen', { project: newProject });
  };
  return (
    <util.View style={styles.container}>
      <util.ScrollView>
        {projects.map((project) => (
          <util.View
            key={project.projectId}
            style={[styles.projectCard, { opacity: project.completed ? 0.5 : 1 }]}
          >
            <util.Icon name={project.icon} size={30} color={colors.primaryVariant} />
            <util.Text style={styles.projectTitle}>{project.title}</util.Text>
            <util.Text style={styles.projectContents}>{project.contents}</util.Text>
            {project.photos.map((photo) => (
              <util.View key={photo.id} style={styles.photoContainer}>
                <util.Image source={{ uri: photo.uri }} style={styles.photo} />
                <util.Pressable style={styles.blueButton} onPress={() => handleViewPhoto(photo)}> <util.Text style={styles.buttonText}>View Photo</util.Text></util.Pressable>
                <util.Pressable style={styles.redButton} onPress={() => handleRemovePhoto(project.id, photo.id)}> <util.Text style={styles.buttonText}>Remove Photo</util.Text></util.Pressable>
              </util.View>
            ))}
            <util.View style={styles.buttonRow}>
              <util.Pressable style={styles.greenButton} onPress={() => handleMarkProgress(project.id)}>
                <util.Text style={styles.buttonText}>Mark Progress</util.Text>
              </util.Pressable>
              <util.Pressable style={styles.greenButton} onPress={() => handleMarkComplete(project.id)}>
                <util.Text style={styles.buttonutil.Text}>Mark Complete</util.Text>
              </util.Pressable>
              <util.Pressable style={styles.redButton} onPress={() => handleDelete(project.id)}>
                <util.Text style={styles.buttonText}>Delete</util.Text>
              </util.Pressable>
              <util.Pressable style={styles.blueButton} onPress={() => handleEdit(project.id)}>
                <util.Text style={styles.buttonText}>Edit</util.Text>
              </util.Pressable>
            </util.View>
            {project.completed && (
              <util.Pressable style={styles.blueButton} onPress={() => handleReopenProject(project.id)}>
                <util.Text style={styles.buttonText}>Reopen Project</util.Text>
              </util.Pressable>
            )}
          </util.View>
        ))}
      </util.ScrollView>
      <util.Button title="Add New Project" onPress={handleAddNewProject} />
      <util.Modal
        animationType="slide"
        transparent={true}
        visible={selectedPhoto !== null}
        onRequestClose={() => setSelectedPhoto(null)}
      >
      </util.Modal>
    </util.View>
  );
};


