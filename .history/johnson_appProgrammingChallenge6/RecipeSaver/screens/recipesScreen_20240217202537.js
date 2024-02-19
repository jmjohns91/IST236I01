import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/title";
import NavButton from '../components/navButtons';
import Colors from '../constants/colors';
import RecipeItems from '../components/recipeItems';
import RecipeView from '../modals/RecipeView';






function RecipeScreen(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalRecipeTitle, setModalRecipeTitle] = useState("");
  const [modalRecipeText, setModalRecipeText] = useState("");


  function recipeViewHandler(title, text) {
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  }
  function closeRecipeViewHandler() {
    setModalIsVisible(false);
  }
  return (
    <View style={[
      styles.rootContainer,
      {
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }]}>
      <View style={styles.titleContainer}>
        <Title>
          Recipes
        </Title>
      </View>
      <View style={styles.listContainer}>
        <FlatList data={props.currentRecipes}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <RecipeItems
                id={itemData.item.id}
                title={itemData.item.title}
                onView={props.onView}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            )
          }}
        />
        <RecipeView visible={modalIsVisible}
          title={modalRecipeTitle}
          text={modalRecipeText}
          onClose={closeRecipeViewHandler} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <NavButton onNext={props.onAdd}>Add Recipe</NavButton>
        </View>
        <View style={styles.button}>
          <NavButton onNext={props.onHome}>Home</NavButton>
        </View>
      </View>
    </View >
  )
}
export default RecipeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleContainer: {
    justifyContent: "space-around",
    backgroundColor: Colors.accentColor,
    borderRadius: 20,
    marginBottom: 5,
    marginTop: 20,
    padding: 10,
    flex: 1,
    alignItems: "center"
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listContainer: {
    flex: 7,
  },
  button: {
  }
})