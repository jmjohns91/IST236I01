import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from '../constants/colors';



function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
  title: {
    alignItems: "center",
    fontSize: 60,
    paddingHorizontal: 5,
    color: Colors.accentColor,
    textShadowColor: Colors.primaryDark,
    textShadowRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    // fontFamily: "note",
    borderColor: Colors.primaryDark,
    flex: 1,
  }
})