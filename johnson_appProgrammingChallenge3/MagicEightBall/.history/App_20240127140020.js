import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal, SafeAreaView, TextInput } from 'react-native';

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
          <Pressable android_ripple={{ color: "#b354f3" }} style={({ pressed }) => pressed && styles.pressedButton} onPress={() => setModalVisible(modalVisible)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                Ask
              </Text>
            </View>
          </Pressable>
        </View>
        <Modal>
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
            <Pressable android_ripple={{ color: "#b354f3" }} style={({ pressed }) => pressed && styles.pressedButton} onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  Back
                </Text>
              </View>
            </Pressable>
          </View>
        </Modal>
      </SafeAreaView >
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a943d8',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 10,
  },
  titleContainer: {
    backgroundColor: '#fbe6fc',
    borderRadius: 10,
    padding: 10,
    columnGap: 10,
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
    fontSize: 25,
  },
  button: {
    backgroundColor: '#fbe6fc',
    borderRadius: 5,
    padding: 2,
    paddingHorizontal: 20,
    columnGap: 10,
  },
  output: {
    fontSize: 45,
  },
  buttonText: {
    fontSize: 25,
  },
  pressedButton: {
    opacity: 0.5,
    borderRadius: 5,
  }

});
