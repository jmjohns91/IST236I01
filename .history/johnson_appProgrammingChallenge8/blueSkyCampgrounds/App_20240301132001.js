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
    "note": require("./assets/fonts/Note.ttf"),
    "papernotesBold": require("./assets/fonts/Papernotes_Bold.ttf"),
    "papernotesSketch": require("./assets/fonts/Papernotes_Sketch.ttf"),
    "paperNotes": require("./assets/fonts/Papernotes.ttf"),
    "nanumPen": require("./assets/fonts/NanumPenScript-Regular.ttf"),
    "homemadeApple": require("./assets/fonts/HomemadeApple-Regular.ttf"),
    "Zeyada": require("./assets/fonts/Zeyada-Regular.ttf"),
    "bioRhyme": require("./assets/fonts/BioRhyme-Regular.ttf")
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