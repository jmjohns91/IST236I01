import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';
function MovieItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{props.name}</Text>
      </View>
      <View style={styles.itemImageContainer}>
        <Image style={styles.itemImage} source={props.image}></Image>
      </View>
      <View style={styles.itemRatingContainer}>
        <Text style={styles.itemRating}>{props.rating} / 10</Text>
      </View>
    </View>
  );
}
export default MovieItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    marginBottom: 20,
  },
  itemTitleContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemTitle: {
    flex: 1,
    fontSize: 30,
    textAlign: "center",
  },
  itemImageContainer: {
    flex: 1,
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  itemImage: {
    flex: 1,
    width: "100%",
    // height: 480,
    objectFit: "scale-down",
    resizeMode: "contain",

  },
  itemRatingContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemRating: {
    flex: 1,
    fontSize: 30,
    textAlign: "center",
  },
});