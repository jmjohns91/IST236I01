import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


function NavButton(props) {
  return (
    <Pressable
      android_ripple={{ color: '#990D04' }}
      onPress={props.onPress}
    >
      <View style={styles.buttonContainer}>
        <View>
          <Text>
            {props.children}
          </Text>
        </View>
      </View>

    </Pressable>
  )
}
export default NavButton;

const styles = StyleSheet.create({
  buttonText: {

  },
  buttonContainer: {

  }
})