import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
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
      <View style={styles.informationContainer}>
        <Text style={styles.information}></Text>
      </View>
    </View>
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
    flex: 4
  },
  image: {
    resizeMode: "contain",
    height: "70%",
    paddingHorizontal: 5,
  }

})