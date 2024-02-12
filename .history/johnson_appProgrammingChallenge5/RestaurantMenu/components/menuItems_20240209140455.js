import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from '../constants/colors';
function MenuItems(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {props.name}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Text style={styles.image}>
          {props.image}
        </Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>
          {props.price}
        </Text>
      </View>
    </View>
  )
}



export default MenuItems;
const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
  },
  titleContainer: {
    backgroundColor: Colors.menuAccentRed,
    borderWidth: 1,
    borderColor: Colors.accentColor,
  },
  title: {
    color: Colors.accentColor,
    fontSize: 15,
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    borderRadius: 5,
  },
  image: {
    resizeMode: "contain",
  },
  priceContainer: {

  },
  price: {
    color: Colors.accentColor,
  },
})