import { Colors, Fonts, styles } from '../../constants/index';
import * as util from '../../index';
import { HomeScreen, ProjectIdeasScreen, StartedProjectsScreen } from '../../screens/index';

const Tab = util.createBottomTabNavigator();
function HomeHeaderTitle({ children }) {
  return (
    <util.View style={styles.titleContainer}>
      <util.Text style={styles.hyperHands}>Hyper Hands</util.Text>
      <util.Text style={styles.taskTracker}> Task Tracker</util.Text>
    </util.View >
  );
}
export const BottomTabNavigator = () => {
  const { width, height } = util.useWindowDimensions();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <util.MaterialIcons name="home" size={size} color={color} />;
          } else if (route.name === 'Ideas') {
            return <util.MaterialCommunityIcons name="lightbulb-outline" size={size} color={color} />;
          } else if (route.name === 'Projects') {
            return <util.Entypo name="tools" size={size} color={color} />;
          }
        },
        tabBarActiveBackgroundColor: Colors.primary,
        tabBarActiveTintColor: Colors.primaryText,
        tabBarInactiveBackgroundColor: Colors.primaryVariant,
        tabBarInactiveTintColor: Colors.primaryText,
        tabBarStyle: {
          backgroundColor: Colors.primary,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: true,
        headerTitle: props => <HomeHeaderTitle {...props} />,
        headerStyle: { backgroundColor: Colors.primary, height: height / 6 },
      }} />
      <Tab.Screen name="Ideas" component={ProjectIdeasScreen} options={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTitleStyle: { fontFamily: 'etnaSS', color: Colors.primaryText, fontSize: 50 },
        headerTitleAlign: 'center',
      }} />
      <Tab.Screen name="Projects" component={StartedProjectsScreen} options={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTitleStyle: { fontFamily: 'etnaSS', color: Colors.primaryText, fontSize: 50 },
        headerTitleAlign: 'center',
      }} />
    </Tab.Navigator>
  );
}
