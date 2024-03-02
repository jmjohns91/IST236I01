import { StatusBar } from 'expo-status-bar';
import { useState, useMemo, useCallback } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, ScrollView, Switch, ImageBackground, Pressable, useWindowDimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from "expo-splash-screen";
import Colors from '../constants/colors';



function Title(props) {
  const { width, height } = useWindowDimensions();
  return <Text style={[styles.title, { fontSize: width * 0.13 }]}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 5,
    color: Colors.primary,
    fontFamily: "slab",
    borderColor: Colors.primaryDark,
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    textAlign: "center",
  }
})