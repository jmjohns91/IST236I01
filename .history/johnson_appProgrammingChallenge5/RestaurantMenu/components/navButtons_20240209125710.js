import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/title";
import NavButton from '../components/navButtons';


function NavButton(props) {
  return (
    <Pressable
      android_ripple={{ color: '#990D04' }}
      onPress={props.onPress}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {props.children}
          </Text>
        </View>
      </View>

    </Pressable>
  )
}
export default NavButton;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#FF9E0E",
    width: 200,
    margin: 10,
    backgroundColor: "#e9d0d0",
  },
  text: {
    padding: 8,
    fontSize: 30,
    textAlign: "center",
    fontStyle: "italic",
  },
})