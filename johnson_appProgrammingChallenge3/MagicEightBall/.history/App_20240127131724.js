import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button, PressableAndroidRippleConfig, SafeAreaView, TextInput } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text>Magic Eight Ball</Text>
        </View>
        <View style={styles.questionContainer}>

        </View>
        <View style={styles.buttonContainer}>

        </View>


        <View style={styles.labelContainer}>
          <Text>You Asked:</Text>
        </View>
        <View style={styles.askedQuestionContainer}>
          <Text></Text>
        </View>
        <View style={styles.labelContainer}>
          <Text>The Magic Eight Ball said:</Text>
        </View>
        <View style={styles.questionResponseContainer}>
          <Text></Text>
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
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold',
  },
  questionContainer: {

  },
  buttonContainer: {

  },
  labelContainer: {
  },

  askedQuestionContainer: {

  },
  questionResponseContainer: {

  }
});
