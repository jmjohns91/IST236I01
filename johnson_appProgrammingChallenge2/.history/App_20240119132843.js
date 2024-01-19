import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.container}>
        <View styles={styles.imageContainer}>

        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.informationContainer}>Jessie-Marie Johnson</Text>
          <Text style={styles.informationContainer}> aka</Text>
          <Text style={styles.informationContainer}> Billie</Text>
          <Text style={styles.informationContainer}>910-538-8878</Text>
          <Text style={styles.informationContainer}>jjohn172@hgtc.edu</Text>
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
    fontSize: 20,
    color: '#880e4f',
    marginBottom: 10,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
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
