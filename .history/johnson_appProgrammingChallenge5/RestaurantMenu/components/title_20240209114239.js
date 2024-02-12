import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from "react-native-safe-area-context";


function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
  title: {
    flex: 1,
    alignItems: "center",
    fontSize: 50,
    fontWeight: "bold",
    color: "#FF9E0E",
  }
})