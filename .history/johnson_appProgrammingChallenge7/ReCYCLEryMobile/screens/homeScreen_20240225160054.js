import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/title";
import NavButton from '../components/navButtons';
import Colors from '../constants/colors';
import { RadioGroup } from "react-native-radio-buttons-group";
import { Che }





function HomeScreen(props) {
    //Set Safe Area Screen Boundaries
    const insets = useSafeAreaInsets();
    return (
      <View style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }]}>
        <View style={styles.titleContainer}>
          <Title>
            ReCYCLEry
          </Title>
        </View>
        <View style={styles.formContainer}>
          <ScrollView style={styles.orderInputContainer}>
            <View style={styles.radioButtonContainer}>
              <Text style={styles.timeInstructions}>
                Select your service time:
              </Text>
              <RadioGroup style={styles.radioButtons}
                radioButtons={props.repairTimeRadioButtons}
              />
            </View>
            <View style={styles.checkBoxContainer}>
              <Text style={styles.instructions}>Select your services:</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.buttonContainer}>
          <NavButton onNext={props.onNext}>Submit</NavButton>
        </View>
      </View >
    )
  }
export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  titleContainer: {
    justifyContent: "space-around",
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  formContainer: {
    flex: 5,
  },
  radioButtonContainer: {
  },
  orderInputContainer: {

  },
  instructions: {
    fontSize: 20,
  },
  radioButtons: {

  },

})