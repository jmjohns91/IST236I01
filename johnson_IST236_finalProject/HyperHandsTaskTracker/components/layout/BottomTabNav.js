import { size } from '@shopify/react-native-skia';
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
  const getIconSize = (focused) => focused ? 60 : 50;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let IconComponent;

          if (route.name === 'Home') {
            iconName = focused ? "home" : "home-outline";
            IconComponent = util.MaterialCommunityIcons;
          } else if (route.name === 'Ideas') {
            iconName = focused ? "lightbulb" : "lightbulb-outline";
            IconComponent = util.MaterialIcons;
          } else if (route.name === 'Projects') {
            iconName = focused ? "toolbox" : "toolbox-outline";
            IconComponent = util.MaterialCommunityIcons;
          }

          return (
            <IconComponent
              name={iconName}
              size={getIconSize(focused)}
              color={focused ? Colors.primaryText : color}
              style={{
                transform: [{ scale: focused ? 1.2 : 1 }]
              }}
            />
          );
        },
        tabBarActiveBackgroundColor: Colors.primary,
        tabBarActiveTintColor: Colors.primaryText,
        tabBarInactiveBackgroundColor: Colors.primaryVariant,
        tabBarInactiveTintColor: Colors.primaryText,
        tabBarStyle: {
          backgroundColor: Colors.primary,
          height: height / 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.3,
          shadowRadius: 20,
          elevation: 20,
          borderRadius: 15,
          marginHorizontal: 5,
          position: 'fixed',
          bottom: 1,
          overflow: 'hidden',
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown: true,
        headerTitle: props => <HomeHeaderTitle {...props} />,
        headerStyle: { backgroundColor: Colors.primary, height: height / 6 },
      }} />
      <Tab.Screen name="Ideas" component={ProjectIdeasScreen} options={{
        headerStyle: { backgroundColor: Colors.primary, height: height / 7 },
        headerTitleStyle: { fontFamily: 'etnaSS', color: Colors.primaryText, fontSize: 50 },
        headerTitleAlign: 'center',
      }} />
      <Tab.Screen name="Projects" component={StartedProjectsScreen} options={{
        headerStyle: { backgroundColor: Colors.primary, height: height / 7 },
        headerTitleStyle: { fontFamily: 'etnaSS', color: Colors.primaryText, fontSize: 50 },
        headerTitleAlign: 'center',
      }} />
    </Tab.Navigator>
  );
}