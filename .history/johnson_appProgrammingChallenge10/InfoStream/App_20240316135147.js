import { StatusBar } from 'expo-status-bar';
import { useState, useMemo, useCallback } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, ScrollView, Switch, ImageBackground, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from "expo-splash-screen";
import Colors from './constants/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookmarkedNewsScreen from './screens/BookmarkedNewsScreen';
import TechNewsScreen from './screens/TechNewsScreen';
import NewsDetailsScreen from './screens/NewsDetailsScreen';
import USNewsScreen from './screens/USNewsScreen';
import WorldNewsScreen from './screens/WorldNewsScreen';
import { useFonts } from './constants/fonts';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();
export default function App() {
  const [fontsLoaded, fontError] = useFonts();
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError])
  // Set state variable for the current screen
  // const [currentScreen, setCurrentScreen] = useState("home");
  //set screenHandler functions for each screen
  // function secondScreenHandler() {
  //   setCurrentScreen("second");
  // }
  // function homeScreenHandler() {
  //   setCurrentScreen("home");
  // }
  // let screen = <HomeScreen onNext={secondScreenHandler} />;
  // if (currentScreen === "second") {
  //   screen = <SecondScreen onNext={homeScreenHandler} />;
  // }
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style='auto' />
        <NavigationContainer>
          <Stack.Navigator>

          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: "center",
  },
});