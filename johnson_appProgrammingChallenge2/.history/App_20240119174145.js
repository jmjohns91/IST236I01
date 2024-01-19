import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/images/selfie.jpg")}></Image>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Jessie-Marie Johnson</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:9105388878")}>910-538-8878</Text>
          <Text style={styles.text}>jjohn172@hgtc.edu</Text>
          <Button style={styles.button} title='Github'>Github</Button>
        </View>
      </SafeAreaView >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8dc5f3',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#8dc5f3',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  informationContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    backgroundColor: '#8dc5f3',
  },
  text: {
    fontSize: 30,
    color: '#212121',
    margin: 10,
  },
  button: {
    backgroundColor: '#7d1ee9',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#212121',
    fontSize: 25,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    resizeMode: "center",
    borderRadius: 10,
  }
});
