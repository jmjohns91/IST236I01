import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/title";





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
        <Text style={styles.infoText} onPress={() => Linking.openURL("https://maps.app.goo.gl/A1CUoqJCSBDQAtzb7")}>2060 Lower Rosewell Rd Ste. 160, Marietta, GA, 30068</Text>
        <Text style={styles.infoText} onPress={() => Linking.openURL("https://www.threecolorga.com/")}>Website</Text>
      </View >
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
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    resizeMode: "contain",
    height: "70%",
  },
  infoText: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 30,
    fontStyle: "italic",

  },
  infoContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }
})