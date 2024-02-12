import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from `react-native-safe-area-context`;
import HomeScreen from './screens/homeScreen';
import MenuScreen from './screens/menuScreen';

export default function App() {
  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");
  //Determine which screen to be on
  let screen = <HomeScreen />;
  if (currentScreen === "menu") {
    screen = <MenuScreen />;
  }
  return (
    <>
      <Statusbar style='auto' />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
