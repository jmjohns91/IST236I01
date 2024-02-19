import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, Modal, ScrollView, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/title";
import NavButton from '../components/navButtons';
import Colors from '../constants/colors';
import RecipeItems from '../components/recipeItems';






function AddRecipeScreen(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeText, setRecipeText] = useState("");

  function addRecipeHandler() {
    props.onSave[recipeTitle, recipeText]
    props.onCancel();
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
          Add Recipe
        </Title>
      </View>
      <View style={styles.inputContainer}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.inputTitleContainer}>
            <TextInput
              placeholder='Enter recipe title'
              style={styles.title}
              onChangeText={setRecipeTitle} />
          </View>
          <View style={styles.textContainer}>
            <TextInput
              placeholder='Enter recipe text'
              style={styles.text}
              onChangeText={setRecipeText}
              textAlignVertical='top'
              multiline={true}
              numberOfLines={24} />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <NavButton onNext={addRecipeHandler}>Save</NavButton>
            </View>
            <View style={styles.button}>
              <NavButton onNext={props.onCancel}>Cancel</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>

    </View >
  )
}
export default AddRecipeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    justifyContent: "center",
    backgroundColor: Colors.accentColor,
    borderRadius: 20,
    marginBottom: 5,
    marginTop: 20,
    padding: 10,
    flex: 3,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flex: 9,
  },
  button: {
  },
  inputTitleContainer: {
    backgroundColor: Colors.primaryLight,
    // flex: 2,
    marginBottom: 15,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textContainer: {
    backgroundColor: Colors.primaryLight,
    flex: 5,
    marginHorizontal: 5,
    alignItems: "flex-start",
  },
  text: {
    fontSize: 20,

  },
  scrollContainer: {
    flex: 5,
  }

})