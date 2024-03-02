import { StatusBar } from 'expo-status-bar';
import { useState, useMemo, useCallback } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, ScrollView, Switch, ImageBackground, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from "expo-splash-screen";
import Colors from '../constants/colors';


function NavButton(props) {
  return (
    <Pressable
      onPress={props.onNext}
      style={({ pressed }) => pressed && styles.pressedItem}
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
    borderColor: Colors.divider,
    width: 190,
    margin: 10,
    backgroundColor: Colors.accentColor,
  },
  text: {
    padding: 8,
    fontSize: 40,
    textAlign: "center",
    fontFamily: "paperNotes",
    color: Colors.primaryText,
  },
  pressedItem:
  {
    opacity: 0.8,
    android_ripple: Colors.divider,
  }
})