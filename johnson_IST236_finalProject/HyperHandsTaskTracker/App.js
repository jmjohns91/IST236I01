import { Colors, Fonts, styles } from './constants/index';
import * as util from './index';
import * as comp from './components/index';
import { createDummyData } from './data/dummyData';
import { HomeScreen, ProjectIdeasScreen, ProjectDetailsScreen, IdeaDetailScreen, StartedProjectsScreen } from './screens/index';
util.SplashScreen.preventAutoHideAsync();
const Stack = util.createNativeStackNavigator();

export default function App() {

  let [fontsLoaded, fontError] = Fonts();

  const onLayoutRootView = util.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await util.SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  } else {

    return (
      <util.NavigationContainer onReady={onLayoutRootView} >
        <util.StatusBar style='auto' />
        <util.SafeAreaProvider>
          <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
              headerTintColor: Colors.primaryText,
              headerStyle: { backgroundColor: Colors.primary },
              contentStyle: { backgroundColor: Colors.background },
            }}
          >
            <Stack.Screen
              name="Landing"
              component={comp.BottomTabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ProjectDetailsScreen"
              component={ProjectDetailsScreen}
              options={{
                headerBackTitleVisible: false,
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="IdeaDetailScreen"
              component={IdeaDetailScreen}
              options={{
                headerBackTitleVisible: false,
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </util.SafeAreaProvider>
      </util.NavigationContainer>
    );
  }
}
