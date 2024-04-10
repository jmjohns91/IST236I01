import * as util from '../index';
import { Colors, Fonts, styles } from '../constants/index';
import { ProjectDetailsScreen, IdeaDetailScreen } from './index';
export const HomeScreen = ({ navigation, route }) => {
  const [tasksCompletedPercentage, setTasksCompletedPercentage] = util.useState(0);
  const [openProjects, setOpenProjects] = util.useState(0);
  const [oldestOpenProject, setOldestOpenProject] = util.useState(null);
  const insets = util.useSafeAreaInsets();
  const { width, height } = util.useWindowDimensions();
  const handleNewProject = () => {
    navigation.navigate('ProjectDetailsScreen');
  };

  const handleAddNewIdea = () => {
    navigation.navigate('IdeaDetailScreen');
  };
  util.useEffect(() => {
    const fetchProjectsData = async () => {
      const keys = await util.AsyncStorage.getAllKeys();
      const projectKeys = keys.filter(key => key.startsWith('@project_'));
      const projectData = await util.AsyncStorage.multiGet(projectKeys);
      const projects = projectData.map(item => JSON.parse(item[1]));
      const completedProjects = projects.filter(project => project.completed);
      const tasksCompletedPercentage = (completedProjects.length / projects.length) * 100;
      setTasksCompletedPercentage(tasksCompletedPercentage);
      const openProjects = projects.filter(project => !project.completed);
      setOpenProjects(openProjects.length);
      const oldestOpenProject = openProjects.reduce((oldest, project) => {
        return (!oldest || new Date(project.createdDate) < new Date(oldest.createdDate)) ? project : oldest;
      }, null);
      setOldestOpenProject(oldestOpenProject);
    };

    fetchProjectsData();
  }, []);
  const handleOldestOpenProject = (projectId) => {
    navigation.navigate('ProjectDetailsScreen', { projectId: projectId });
  };
  return (
    <util.View style={styles.container}>
      <util.View style={styles.homeContent}>
        <util.View style={styles.widgets}>
          <util.View style={styles.row}>
            <util.View style={styles.homeCard}>
              <util.LiquidGauge value={tasksCompletedPercentage} />
              <util.Text style={styles.label} >Tasks Completed</util.Text>
            </util.View>
            <util.View style={styles.homeCard}>
              <util.Text style={styles.bigNumber}>{openProjects}</util.Text>
              <util.Text style={styles.label}>Open Projects</util.Text>
            </util.View>
          </util.View>
          <util.View style={styles.row}>
            <util.TouchableOpacity style={styles.homeCard} onPress={handleNewProject}>
              <util.MaterialIcons name="add-circle-outline" paddingTop={30} size={100} color={Colors.accentColor} />
              <util.View style={styles.greenButton} >
                <util.Text style={styles.label}>Add New Project</util.Text>
              </util.View></util.TouchableOpacity>
            <util.TouchableOpacity style={styles.homeCard} onPress={handleAddNewIdea}>
              <util.MaterialIcons name="add-circle-outline" paddingTop={30} size={100} color={Colors.primary} />
              <util.View style={styles.blueButton}>
                <util.Text style={styles.label}>Add New Idea</util.Text>
              </util.View>
            </util.TouchableOpacity>
          </util.View>
        </util.View >

        <util.View style={styles.ooP}>
          {oldestOpenProject && (
            <util.TouchableOpacity style={styles.homeCard} onPress={() => handleOldestOpenProject(oldestOpenProject.id)}>
              <util.Text style={styles.oldestProjectTitle}>{oldestOpenProject.title}</util.Text>
              <util.View style={styles.daysSinceProgressContainer}>
                <util.Text style={styles.daysSinceProgressLabel}>Days since progress made</util.Text>
                <util.Text style={styles.daysSinceProgressNumber}>{oldestOpenProject.daysSinceProgress}</util.Text>
              </util.View>
              <util.Text style={styles.label}>Oldest Open Project</util.Text>
            </util.TouchableOpacity>
          )}
        </util.View>
      </util.View >
    </util.View >
  );
};

