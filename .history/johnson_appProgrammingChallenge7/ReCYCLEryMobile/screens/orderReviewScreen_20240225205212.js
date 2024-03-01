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
      <View>
        <Text>Your order has been placed, with your order details below:</Text>
      </View>
      <View>
        <Text>Service Type:</Text>
        <Text>{props.repair</Text>
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
  },
  scrollContainer: {
    flex: 5,
  }

})