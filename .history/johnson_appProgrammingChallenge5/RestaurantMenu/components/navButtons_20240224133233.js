import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from '../constants/colors';


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
    borderColor: Colors.accentColor,
    width: 200,
    margin: 10,
    backgroundColor: Colors.menuAccentRed,
  },
  text: {
    padding: 8,
    fontSize: 40,
    textAlign: "center",
    fontFamily: "poorStory",
    color: Colors.accentColor,
  },
})