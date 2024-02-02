import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
function MovieItem(props) {
  return (
    <View>
      <View>
        <Text>{props.name}</Text>
      </View>
      <View>
        <Image source={props.image}></Image>
      </View>
      <View>
        <Text>{props.rating} / 10</Text>
      </View>
    </View>
  );
}
export default MovieItem;