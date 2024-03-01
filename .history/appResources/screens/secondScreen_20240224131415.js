import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, Modal, ScrollView, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/title";
import NavButton from '../components/navButtons';
import Colors from '../constants/colors';





function SecondScreen(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  function addRecipeHandler() {
    props.onAdd[recipeTitle, recipeText]
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
          Title
        </Title>
      </View>
      <View>

      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <NavButton onNext={homeScreenHandler}>Home</NavButton>
        </View>
      </View>
    </View>
  )
}
export default SecondScreen;

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
    flex: 1,
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
    color: Colors.primaryText,
  },
  textContainer: {
    backgroundColor: Colors.primaryLight,
    flex: 5,
    marginHorizontal: 5,
    alignItems: "flex-start",
  },
  text: {
    fontSize: 20,
    color: Colors.primaryText,

  },
  scrollContainer: {
    flex: 5,
  }

})