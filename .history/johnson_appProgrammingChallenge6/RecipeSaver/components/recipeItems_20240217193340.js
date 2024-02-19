import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from '../constants/colors';
function RecipeItems(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}></Text>
      </View>
      <View>
        <View>
          <Button />
        </View>
        <View>
          <Button />
        </View>
      </View>
    </View>
  )
}



export default RecipeItems;
const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
    flex: 1,
  },
  titleContainer: {
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: Colors.divider,
    width: "100%",
  },
  title: {
    color: Colors.primaryText,
    fontSize: 15,
    textAlign: "left",
  },
  rowContainer: {
    flexDirection: 'row',
  },
  itemTitleContainer: {

  },
  itemTitle: {

  }
})