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
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





function USNewsScreen(props) {
  return (
    <View>
      <Text>

      </Text>
    </View >
  )
}
export default USNewsScreen;

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
    alignItems: "center",
    borderColor: Colors.primaryDark,
    borderWidth: 3,
  },
  buttonContainer: {
    flex: 3,
    flexDirection: "row",
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