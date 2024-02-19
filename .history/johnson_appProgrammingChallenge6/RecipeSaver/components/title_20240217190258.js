import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from '../constants/colors';
import Fonts from '../constants/fonts';



function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    fontSize: 60,
    color: Colors.primaryText,
    textShadowColor: Colors.primaryDark,
    textShadowRadius: 25,
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "note",
  }
})