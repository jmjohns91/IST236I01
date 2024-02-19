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
import RecipeItems from './components/recipeItems';



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
  const [currentID, setCurrentID] = useState(2);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Chocolate Chip Cookies",
      text: "Ingredients:\n - 1 cup(2 sticks) unsalted butter, softened\n - 3 / 4 cup granulated sugar\n - 3 / 4 cup packed brown sugar\n" +
        "- 2 large eggs\n - 1 teaspoon vanilla extract\n - 2 1 / 4 cups all - purpose flour\n - 1 teaspoon baking soda\n - 1 / 2 teaspoon salt\n" +
        "- 2 cups semisweet chocolate chips\n\n Instructions: \n 1. Preheat your oven to 375°F(190°C) and line baking sheets with parchment paper.\n" +
        "2. In a large mixing bowl, cream together the softened butter, granulated sugar, and brown sugar until smooth and creamy.\n" +
        "3. Beat in the eggs one at a time, then stir in the vanilla extract.\n 4. In a separate bowl, combine the all - purpose flour, baking soda, and salt.\n" +
        "5. Gradually add the dry ingredients to the wet ingredients and mix until well combined.\n 6. Fold in the chocolate chips until evenly distributed throughout the dough.\n" +
        "7. Using a spoon or cookie scoop, drop rounded tablespoons of dough onto the prepared baking sheets, spacing them about 2 inches apart.\n 8. Bake in the preheated oven for 8 to 10 minutes, or until the edges are golden brown.\n" +
        "9. Allow the cookies to cool on the baking sheets for a few minutes before transferring them to wire racks to cool completely.\n",
    }
  ]);
  //set screenHandler functions for each screen
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
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => {
        item.id !== id;
      })
    })
  }
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [...currentRecipes, { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    recipeScreenHandler();
  }
  //Determine which screen to be on
  let screen = <HomeScreen onNext={recipeScreenHandler} />;
  if (currentScreen === "recipe") {
    screen = <RecipeScreen onSave={addRecipeScreenHandler} onHome={homeScreenHandler} onDelete={deleteRecipeHandler} currentRecipes={currentRecipes} />;
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
    justifyContent: "center",
  },
});
