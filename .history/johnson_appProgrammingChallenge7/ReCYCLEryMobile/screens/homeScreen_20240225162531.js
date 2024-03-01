import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/title";
import NavButton from '../components/navButtons';
import Colors from '../constants/colors';
import { RadioGroup } from "react-native-radio-buttons-group";
import { useFonts } from 'expo-font';
import { BouncyCheckbox } from "react-native-bouncy-checkbox";




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
      <View style={styles.inputContainer}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.radioButtonContainer}>
            <Text style={styles.instructions}>
              Select your service time:
            </Text>
            <RadioGroup
              radioButtons={props.repairTimeRadioButtons}
              onPress={props.onSetRepairTimeId}
              selectedId={props.repairTimeId}
              layout="row"
              containerStyle={styles.radioButtons}
              labelStyle={styles.radioButtonLabels}
            />
          </View>
          <View style={styles.checkBoxContainer}>
            <Text style={styles.instructions}>Select your services:</Text>
            <View style={styles.checkBoxSubContainer}>
              {props.services.map((item) => {
                return <BouncyCheckbox
                  key={item.id}
                  text={item.name}
                  onPress={props.onSetServices.bind(this.item.id)}
                />;

              }
              )}
            </View>
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
  inputContainer: {
    flex: 5,
  },
  radioButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flex: 1,
  },
  instructions: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.primaryText,
    fontFamily: "josefina",
  },
  radioButtons: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.primaryLight,
    padding: 10,
  },
  radioButtonLabels: {
    fontSize: 15,
    color: Colors.primaryText,
    fontFamily: "josefina",
  }

})