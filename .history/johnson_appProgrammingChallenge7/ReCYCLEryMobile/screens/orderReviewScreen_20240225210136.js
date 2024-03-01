import { StatusBar } from 'expo-status-bar';
import { useState, useMemo } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, ScrollView, Switch } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/Title";
import NavButton from '../components/NavButtons';
import Colors from '../constants/colors';
import { RadioGroup } from "react-native-radio-buttons-group";
import { useFonts } from 'expo-font';
import { BouncyCheckbox } from "react-native-bouncy-checkbox";






function OrderReviewScreen(props) {
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
        <Title style={styles.title}>
          Order Summary
        </Title>
      </View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Your order has been placed, with your order details below:</Text>
      </View>
      <View style={styles.serviceContainer}>
        <Text style={styles.service}>Service Type:</Text>
        <Text style={styles.subService}>{props.repairTime}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <NavButton onNext={homeScreenHandler}>Home</NavButton>
        </View>
      </View>
    </View>
  )
}
export default OrderReviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    justifyContent: "center",
    backgroundColor: Colors.accentColor,
    borderRadius: 20,
    marginBottom: 5,
    marginTop: 20,
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.primaryText,
    marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.accentColor,
  },
  scrollContainer: {
    flex: 5,
  },
  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primaryText,
  },
  service: {

  },
  serviceContainer: {

  },
  subService: {

  },

})