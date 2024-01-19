import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            style={styles.image}
            source={require("./assets/images/selfie.jpg")}
            resizeMode="center"
          ></ImageBackground>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Jessie-Marie Johnson</Text>
          <Text style={styles.text}>910-538-8878</Text>
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
    backgroundColor: '#a8d2fa',
  },
  image: {
    flex: 1,
    // paddingTop: 20,
    // resizeMode: "center",
    borderWidth: 5,
    borderColor: '#4a148c',
  }
  imageContainer: {
    flex: 1,
    backgroundColor: '#a8d2fa',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    borderWidth: 5,
    borderColor: '#4a148c',
  },
  informationContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    backgroundColor: '#a8d2fa',
  },
  text: {
    fontSize: 30,
    color: '#880e4f',
    margin: 10,
  },
  button: {
    backgroundColor: '#4a148c',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fa1010',
    fontSize: 25,
  },

});
