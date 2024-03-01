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
        <ScrollView>
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
    marginBottom: 5,
    // marginTop: 20,
    // padding: 10,
    flex: 2,
    alignItems: "center",

  },
  buttonContainer: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  textContainer: {
    flex: 5,
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