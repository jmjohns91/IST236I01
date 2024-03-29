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
    marginBottom: 20,
  },
  itemTitleContainer: {
    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  itemImageContainer: {
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemImage: {
    width: "100%",
    // height: 300,
    resizeMode: "cover",
  },
  itemRatingContainer: {
    backgroundColor: "#fff",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemRating: {
    fontSize: 30,
    textAlign: "center",
  },
});