import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, ScrollView, Image } from 'react-native';

import MovieItem from './components/MovieItem';

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: "Saltburn",
      image: require("./assets/images/saltburn.webp"),
      rating: "7.1",
    },
    {
      name: "Poor Things",
      image: require("./assets/images/poorthings.jpg"),
      rating: "8.4",
    },
    {
      name: "Mean Girls",
      image: require("./assets/images/meangirls.jpg"),
      rating: "6.3",
    },
    {
      name: "Killers of the Flower Moon",
      image: require("./assets/images/kotfm.jpg"),
      rating: "7.7",
    },
    {
      name: "The Holdovers",
      image: require("./assets/images/theholdovers.jpg"),
      rating: "8.0",
    },
    {
      name: "Wonka",
      image: require("./assets/images/wonka.jpg"),
      rating: "7.2",
    },
    {
      name: "Oppenheimer",
      image: require("./assets/images/oppenheimer.jpg"),
      rating: "8.4",
    },
    {
      name: "Society of the Snow",
      image: require("./assets/images/sots.jpg"),
      rating: "7.9",
    },
    {
      name: "The Zone of Interest",
      image: require("./assets/images/zoi.jpg"),
      rating: "7.9",
    },
    {
      name: "Anyone But You",
      image: require("./assets/images/anyonebutyou.jpg"),
      rating: "6.7",
    },
  ]);

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Top Ten Movies
          </Text>
        </View>
        <View style={styles.listContainer}>
          <ScrollView>
            {movieItems.map((itemData) => (
              <MovieItem
                name={itemData.name}
                image={itemData.image}
                rating={itemData.rating} />))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#35a7e9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 8,
    width: "80%"
  },
});
