import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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
      name: "",
      image: require("./assets/images/"),
      rating: "",
    },
  ]);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
