import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/homeScreen';
import RecipeScreen from './screens/recipesScreen';
import AddRecipeScreen from './screens/addRecipesScreen';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';

export default function App() {
  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentOrder, setCurrentOrder] = useState([
  ]);
  //set screenHandler functions for each screen
  function orderReviewScreenHandler() {
    setCurrentScreen("orderReview");
  }
  function homeScreenHandler() {
    setCurrentScreen("home");
  }
  let screen = <HomeScreen onNext={orderReviewScreenHandler} />;
  if (currentScreen === "orderReview") {
    screen = <OrderReviewScreen onNext={homeScreenHandler} />;
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
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: "center",
  },
});
