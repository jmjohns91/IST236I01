import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Modal, SafeAreaView, TextInput } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [ballResponse, setBallResponse] = useState('');
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];


  function ShakeTheBall() {
    setModalVisible(true);
    const randomIndex = Math.floor(Math.random() * responses.length);
    setBallResponse(responses[randomIndex]);
  }
  function goBack() {
    setModalVisible(false);
  }
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
            style={styles.input} onChangeText={setUserQuestion}
            value={userQuestion}
            placeholder={'Ask your question of the Magic Eight Ball'}
          >
          </TextInput>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable android_ripple={{ color: "#b354f3" }} style={({ pressed }) => pressed && styles.pressedButton} onPress={ShakeTheBall}>
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
          }}><SafeAreaView style={styles.container}>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>You Asked:</Text>
            </View>
            <View style={styles.outputContainer}>
              <Text style={styles.output}>{userQuestion}</Text>
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>The Magic Eight Ball said:</Text>
            </View>
            <View style={styles.outputContainer}>
              <Text style={styles.output}>{ballResponse}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable android_ripple={{ color: "#b354f3" }} style={({ pressed }) => pressed && styles.pressedButton} onPress={goBack}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    Back
                  </Text>
                </View>
              </Pressable>
            </View>
          </SafeAreaView>
        </Modal >
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
    alignContent: 'center',
    rowGap: 10,
  },
  titleContainer: {
    backgroundColor: '#fbe6fc',
    borderRadius: 10,
    padding: 10,
    rowGap: 30,
    margin: '10%',
    marginTop: '20%',

  },
  questionContainer: {
    backgroundColor: '#fbe6fc',
    borderRadius: 2,
    // height: '50%',
    // width: '80%',
    flex: 2,
  },
  buttonContainer: {
    backgroundColor: '#a943d8',
    paddingHorizontal: 10,
    margin: '5%',
    flex: 1,

  },
  labelContainer: {
    backgroundColor: '#a943d8',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    margin: '5%',

  },

  outputContainer: {
    backgroundColor: '#fbe6fc',
    borderRadius: 10,
    margin: '10%',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
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
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#fbe6fc',
    borderRadius: 5,
    padding: 2,
    paddingHorizontal: 20,
    rowGap: 10,
  },
  output: {
    textAlign: 'center',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
    fontStyle: 'italic',
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    fontStyle: 'italic',
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
