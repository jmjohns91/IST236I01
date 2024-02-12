import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/title";
import NavButton from '../components/navButtons';





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
          Three Colors Asian Kitchen
        </Title>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/buildingFront.png")} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText} onPress={() => Linking.openURL("tel:7709771688")}>770-977-1688</Text>
        <Text style={styles.infoText} onPress={() => Linking.openURL("https://maps.app.goo.gl/A1CUoqJCSBDQAtzb7")}>2060 Lower Rosewell Rd Ste. 160,{"\n"} Marietta, GA, 30068</Text>
        <Text style={styles.infoText} onPress={() => Linking.openURL("https://www.threecolorga.com/")}>https://www.threecolorga.com/</Text>
      </View >
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Menu</NavButton>
      </View>

    </View >
  )
}
export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    justifyContent: "center",
    borderColor: "#FF9E0E",
    borderWidth: 3,
    marginBottom: 5,
    flex: 1,
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    resizeMode: "contain",
    height: "100%",
  },
  infoText: {
    textAlign: "center",
    fontSize: 25,
    fontStyle: "italic",
    padding: 5,
  },
  infoContainer: {
    flex: 2,
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#FF9E0E",
  },
  buttonContainer: {
    flex: 1,
  }
})