import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/title";
import NavButton from '../components/navButtons';
import Colors from '../constants/colors';
import RecipeItems from '../components/recipeItems';


function NoteView(props) {
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
        <Text style={styles.title}>
          {props.title}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {props.text}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <NavButton onNext={props.onClose}>Close</NavButton>
      </View>
    </View >
  );
}


export default NoteView;