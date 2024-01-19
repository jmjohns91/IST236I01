import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
      {/* status bar styling */}
      <StatusBar style='auto' />
      {/* safeareaview container */}
      <SafeAreaView style={styles.container}>
        {/* image container */}
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/images/selfie.jpg")}></Image>
        </View>
        {/* text container */}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e085a',
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#1e085a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationContainer: {
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
  },
  text: {
    fontSize: 30,
    color: '#5e08cc',
    margin: 5,
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
    resizeMode: "center",
    borderRadius: 10,
  }
});
