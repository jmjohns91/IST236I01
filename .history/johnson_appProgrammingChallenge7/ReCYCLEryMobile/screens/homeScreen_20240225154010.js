import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/title";
import NavButton from '../components/navButtons';
import Colors from '../constants/colors';
import { RadioGroup } from "react-native-radio-buttons-group";





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
      <View style={styles.orderInput}>
        <ScrollView>
          <View>
            <Text>
              Select your service time:
            </Text>
            <RadioGroup style={styles.radioButtonGroup}
              radioButtons={props.repairTimeRadioButtons}
            />
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
  orderInput: {
    flex: 5,
  },
  radioButtonGroup: {
    fontSize: 30,
    alignContent: "center",
    alignItems: "center,",
    paddingHorizontal: 5,
    width: 500,
    backgroundColor: Colors.primaryDark,
  }
})