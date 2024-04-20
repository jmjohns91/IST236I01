import { Colors, Fonts, styles } from './constants/index';
import * as util from './index';
import { BottomTabNavigator, IconPicker } from './components/layout/BottomTabNav';
import { HomeScreen, ProjectIdeasScreen, ProjectDetailsScreen, IdeaDetailsScreen, StartedProjectsScreen } from './screens/index';
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
        <util.StatusBar style='auto' translucent={true} />
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
              component={BottomTabNavigator}
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
              name="IdeaDetailsScreen"
              component={IdeaDetailsScreen}
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
