import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
function MovieItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{props.name}</Text>
      </View>
      <View style={styles.itemImageContainer}>
        <Image source={props.image}></Image>
      </View>
      <View style={styles.itemRatingContainer}>
        <Text style={styles.itemRating}>{props.rating} / 10</Text>
      </View>
    </View>
  );
}
export default MovieItem;
const styles 