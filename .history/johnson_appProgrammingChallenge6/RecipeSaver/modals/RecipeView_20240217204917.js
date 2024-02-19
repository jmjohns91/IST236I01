import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, FlatList, Modal, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/title";
import NavButton from '../components/navButtons';
import Colors from '../constants/colors';
import RecipeItems from '../components/recipeItems';


function RecipeView(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {props.title}
          </Text>
        </View>
        <ScrollView style={styles.textContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              {props.text}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <NavButton onNext={props.onClose}>Close</NavButton>
        </View>
      </View >
    </Modal>
  );
}


export default RecipeView;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.primary,
  },
  titleContainer: {
    justifyContent: "center",
    // backgroundColor: Colors.accentColor,
    // borderRadius: 20,
    marginTop: 20,
    // marginTop: 20,
    // padding: 10,
    flex: 2,
    alignItems: "center",

  },
  buttonContainer: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: "papernotesSketch",
    fontSize: 30,
    color: Colors.secondaryText,
    textAlign: "center",
  },
  text: {
    color: Colors.secondaryText,
    fontSize: 20,
    fontFamily: "paperNotes"
  }
})