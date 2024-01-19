import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.container}>
        <View styles={styles.imageContainer}>

        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Jessie-Marie Johnson</Text><Text style={styles.text}> aka</Text><Text style={styles.text}> Billie
          </Text>
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
  },
  informationContainer: {
    flex: 3,
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
