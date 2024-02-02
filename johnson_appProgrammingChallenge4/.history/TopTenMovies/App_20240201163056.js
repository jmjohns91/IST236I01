import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: "Saltburn",
      image: "",
      rating: "7.1",
    },
    {
      name: "",
      image: "",
      rating: "",
    },
    {
      name: "",
      image: "",
      rating: "",
    },
    {
      name: "",
      image: "",
      rating: "",
    },
    {
      name: "",
      image: "",
      rating: "",
    },
    {
      name: "",
      image: "",
      rating: "",
    },
    {
      name: "",
      image: "",
      rating: "",
    },
    {
      name: "",
      image: "",
      rating: "",
    },
    {
      name: "",
      image: "",
      rating: "",
    },
    {
      name: "",
      image: "",
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
