import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from `react-native-safe-area-context`;

export default function App() {
  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");
  //Determine which screen to be on
  let screen =</>;
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
