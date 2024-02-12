import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from '../constants/colors';
function MenuItems(props) {
  return (
    <View style={styles.itemContainer}>

      <View style={styles.imageContainer}>
        <Image style={styles.image} source={props.image}>
        </Image>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>
          {props.price}
        </Text>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {props.name}
          </Text>
        </View>
      </View>
    </View>
  )
}



export default MenuItems;
const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
    flex: 1,
  },
  titleContainer: {
    backgroundColor: Colors.menuAccentRed,
    borderWidth: 1,
    borderColor: Colors.accentColor,
    width: "100%",
  },
  title: {
    color: Colors.accentColor,
    fontSize: 15,
    textAlign: "left",
  },
  imageContainer: {
    height: 300,
  },
  image: {
    resizeMode: "contain",
    height: "100%",
  },
  priceContainer: {
    width: "50%",
  },
  price: {
    color: Colors.accentColor,
    fontSize: 15,
    textAlign: "right",
  },
})