import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button, PressableAndroidRippleConfig, SafeAreaView, TextInput } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Magic Eight Ball</Text>
        </View>
        <View style={styles.questionContainer}>

        </View>
        <View style={styles.buttonContainer}>
          <Pressable>
            <View>
              <Text>

              </Text>
            </View>
          </Pressable>
        </View>


        <View style={styles.labelContainer}>
          <Text style={styles.label}>You Asked:</Text>
        </View>
        <View style={styles.outputContainer}>
          <Text style={styles.output}></Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>The Magic Eight Ball said:</Text>
        </View>
        <View style={styles.outputContainer}>
          <Text style={styles.output}></Text>
        </View>
        <View style={styles.buttonContainer}>

        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a943d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    backgroundColor: '#fbe6fc',
    borderRadius: 10,
    padding: 10,
    flex: 1,
  },
  questionContainer: {

  },
  buttonContainer: {

  },
  labelContainer: {
  },

  outputContainer: {

  },
  title: {
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold',
  },
  label: {

  },
  button: {

  },
  output: {

  },

});
