import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from "react-native-safe-area-context";
function MenuItems(props) {
  return (
    <View>
      <View>
        <Text>
          {props.name}
        </Text>
      </View>
      <View>
        <Text>
          {props.image}
        </Text>
      </View>
      <View>
        <Text>
          {props.price}
        </Text>
      </View>
    </View>
  )
}



export default MenuItems;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  }
})