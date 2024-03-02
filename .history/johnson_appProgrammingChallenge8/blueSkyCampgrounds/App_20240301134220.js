import { StatusBar } from 'expo-status-bar';
import { useState, useMemo, useCallback } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, ScrollView, Switch, ImageBackground, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from "expo-splash-screen";
import Colors from './constants/colors';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import Title from "../components/Title";
import NavButton from '../components/NavButtons';

export default function App() {
  const [fontsLoaded] = useFonts({
    "slab": require("./assets/fonts/RobotoSlab-Regular.ttf"),
    "condensed": require("./assets/fonts/RobotoCondensed-Regular.ttf"),
    "sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "lato": require("./assets/fonts/Lato-Regular.ttf"),
    "mountain": require("./assets/fonts/Mountain.ttf")
  })
  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");
  //set screenHandler functions for each screen
  function secondScreenHandler() {
    setCurrentScreen("second");
  }
  function homeScreenHandler() {
    setCurrentScreen("home");
  }
  let screen = <HomeScreen onNext={secondScreenHandler} />;
  if (currentScreen === "second") {
    screen = <SecondScreen onNext={homeScreenHandler} />;
  }
  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: "center",
  },
});