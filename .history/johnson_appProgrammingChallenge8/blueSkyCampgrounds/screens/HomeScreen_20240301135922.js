import { StatusBar } from 'expo-status-bar';
import { useState, useMemo, useCallback } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, ScrollView, Switch, ImageBackground, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from "expo-splash-screen";
import Title from "../components/Title";
import NavButton from '../components/NavButtons';
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
          Blue Sky Campgrounds
        </Title>
      </View>
      <View style={styles.buttonContainer}>
        <NavButton onNext={props.onNext}>Reserve Now</NavButton>
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
    borderRadius: 20,
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    borderColor: Colors.primaryDark,
    borderWidth: 3,
  },
  buttonContainer: {
    flex: 3,
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    flex: 6,
    paddingHorizontal: 50,
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
  },
  image: {
    resizeMode: "cover",
    alignItems: "center",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    width: 356,
    borderColor: Colors.primaryDark,
    borderWidth: 3,

  },
})