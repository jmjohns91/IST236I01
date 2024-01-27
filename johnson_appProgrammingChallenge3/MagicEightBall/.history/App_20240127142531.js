import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Modal, SafeAreaView, TextInput } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Magic Eight Ball</Text>
        </View>
        <View style={styles.questionContainer}>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            style={styles.input}
            placeholder={'Ask your question of the Magic Eight Ball'}>
          </TextInput>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable android_ripple={{ color: "#b354f3" }} style={({ pressed }) => pressed && styles.pressedButton} onPress={() => setModalVisible(true)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                Ask
              </Text>
            </View>
          </Pressable>
        </View>
        <Modal visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
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
    alignContent: 'space-between',
    rowGap: 10,
  },
  titleContainer: {
    backgroundColor: '#fbe6fc',
    borderRadius: 10,
    padding: 10,
    rowGap: 10,
  },
  questionContainer: {
    backgroundColor: '#fbe6fc',
    borderRadius: 2,
    height: '50%',
    width: '80%',
  },
  buttonContainer: {
    flex: 1,
  },
  labelContainer: {
    flex: 1,
  },

  outputContainer: {
    flex: 2,

  },
  title: {
    color: '#000000',
    fontSize: 40,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fbe6fc',
    borderRadius: 5,
    padding: 2,
    paddingHorizontal: 20,
    rowGap: 10,
  },
  output: {
    fontSize: 45,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 25,
  },
  pressedButton: {
    opacity: 0.5,
    borderRadius: 5,
  },
  input: {
    // height: "50%",
    // width: "60%",
    padding: 5,
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
