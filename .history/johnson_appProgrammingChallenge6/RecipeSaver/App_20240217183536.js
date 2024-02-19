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
  const [currentRecipe, setCurrentRecipe] = useState([
    {
      id: 1,
      title: "Chocolate Chip Cookies",
      text: "Chocolate Chips",
    }
  ]);
  function recipeScreenHandler() {
    setCurrentScreen("recipe");
  }
  function homeScreenHandler() {
    setCurrentScreen("home");
  }
  function addRecipeScreenHandler() {
    setCurrentScreen("addRecipe")
  }
  function deleteRecipeHandler(id) {
    setCurrentRecipe((currentRecipe) => {
      return currentNotes.filter((item) => {
        item.id !== id;
      })
    })
  }

  //Determine which screen to be on
  let screen = <HomeScreen onNext={recipeScreenHandler} />;
  if (currentScreen === "recipe") {
    screen = <RecipeScreen onAdd={addRecipeScreenHandler} onHome={homeScreenHandler} onDelete={deleteRecipeHandler} currentRecipe={currentRecipe} />;
  }
  if (currentScreen === "addRecipe") {
    screen = <AddRecipeScreen onSave={homeScreenHandler} onCancel={recipeScreenHandler} />
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
    justifyContent: "space-around",
  },
});
