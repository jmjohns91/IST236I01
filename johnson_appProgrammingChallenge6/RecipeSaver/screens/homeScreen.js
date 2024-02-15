import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/title";
import NavButton from '../components/navButtons';
import Colors from '../constants/colors';






function HomeScreen(props) {
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
          Recipe Saver
        </Title>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/homePage.jpg")} />
      </View>
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Recipes</NavButton>
      </View>
    </View >
  )
}
export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleContainer: {
    justifyContent: "space-around",
    backgroundColor: Colors.accentColor,
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 20,
    padding: 10,
    flex: 1,
    alignItems: "center"
  },
  buttonContainer: {
    flex: 4,
  },
  imageContainer: {
    flex: 8,
    paddingHorizontal: 50,
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
  },
  image: {
    resizeMode: "cover",
    alignItems: "center",
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    width: 400,

  },
})