import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, Modal } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/title";
import NavButton from '../components/navButtons';
import Colors from '../constants/colors';
import RecipeItems from '../components/recipeItems';






function AddRecipeScreen(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
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

      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <NavButton onNext={props.onSave}>Save</NavButton>
        </View>
        <View style={styles.button}>
          <NavButton onNext={props.onCancel}>Cancel</NavButton>
        </View>
      </View>
    </View >
  )
}
export default AddRecipeScreen;

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
  inputContainer: {
    flex: 7,
  },
  button: {

  }
})