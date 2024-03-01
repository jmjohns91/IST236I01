import { StatusBar } from 'expo-status-bar';
import { useState, useMemo, useCallback } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, ScrollView, Switch } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from '../constants/colors';
import { useFonts } from 'expo-font';
import { RadioGroup } from "react-native-radio-buttons-group";
import { BouncyCheckbox } from "react-native-bouncy-checkbox";
import * as SplashScreen from "expo-splash-screen";
import Title from "../components/Title";
import NavButton from '../components/NavButtons';



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
                return (
                  <BouncyCheckbox
                    key={item.id}
                    text={item.name}
                    onPress={props.onSetServices.bind(this, item.id)}
                    textStyle={{
                      textDecorationLine: "none",
                      color: Colors.primaryDark,
                    }}
                    innerIconStyle={{
                      borderRadius: 0,
                      borderColor: Colors.primaryDark,
                    }}
                    iconStyle={{
                      borderRadius: 0,
                    }}
                    fillColor={Colors.primary}
                    style={{ padding: 3, }}
                  />
                );

              })}
            </View>
          </View>
          <View style={styles.switchContainer}>
            <View style={styles.switchSubContainer}>
              <Text style={styles.switchLabels}>Join Newsletter (Free!)</Text>
              <Switch
                onValueChange={props.onSetNewsletter}
                value={props.newsletter}
                thumbColor={props.newsletter ? Colors.accentColor : Colors.divider}
                trackColor={{ false: Colors.primaryText, true: Colors.textIcons }}
              />
            </View>
            <View style={styles.switchSubContainer}>
              <Text style={styles.switchLabels}>Join Rental Club ($100)</Text>
              <Switch
                onValueChange={props.onSetRentalMembership}
                value={props.rentalMembership}
                thumbColor={props.rentalMembership ? Colors.accentColor : Colors.divider}
                trackColor={{ false: Colors.primaryText, true: Colors.textIcons }}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <NavButton onNext={props.onNext}>Submit</NavButton>
          </View>
        </ScrollView>
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
    fontFamily: "josefin",
  },
  radioButtons: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.primaryLight,
    padding: 10,
  },
  radioButtonLabels: {
    fontSize: 16,
    color: Colors.primaryText,
    fontFamily: "josefin",
  },
  switchSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  switchLabels: {
    fontSize: 20,
  },
  switchContainer: {

  },
  checkBoxContainer: {

  },
  checkBoxSubContainer: {

  },
})