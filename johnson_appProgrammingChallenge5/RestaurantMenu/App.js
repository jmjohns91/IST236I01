import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/homeScreen';
import MenuScreen from './screens/menuScreen';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';


export default function App() {
  //Set up custom fonts
  const [fontsLoaded] = useFonts({
    "poorStory": require("./assets/fonts/Poor_Story/PoorStory-Regular.ttf"),
    "bioRhyme": require("./assets/fonts/BioRhyme/static/BioRhyme-Regular.ttf")
  })
  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  function menuScreenHandler() {
    setCurrentScreen("menu");
  }
  function homeScreenHandler() {
    setCurrentScreen("home");
  }
  //Determine which screen to be on
  let screen = <HomeScreen onNext={menuScreenHandler} />;
  if (currentScreen === "menu") {
    screen = <MenuScreen onNext={homeScreenHandler} />;
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
    backgroundColor: Colors.menuRed,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
