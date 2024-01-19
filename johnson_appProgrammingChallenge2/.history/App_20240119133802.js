import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.container}>
        <View styles={styles.imageContainer}>
          <Image source={require("assets\images\selfie.jpg")}></Image>
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
    backgroundColor: '#e0f7fa',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#880e4f',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4a148c',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
