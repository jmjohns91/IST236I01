import { StatusBar } from 'expo-status-bar';
import { useState, useMemo, useCallback } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, ScrollView, Switch } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/Title";
import NavButton from '../components/NavButtons';
import Colors from '../constants/colors';
import { RadioGroup } from "react-native-radio-buttons-group";
import { useFonts } from 'expo-font';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { LinearGradient } from 'expo-linear-gradient';





function OrderReviewScreen(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[Colors.primaryDark, Colors.primaryLight, Colors.textIcons, Colors.primaryLight]}
      style={styles.rootContainer}
    >
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
          <Text style={styles.service}>Services:</Text>
          {props.service.map((item) => {
            if (item.value) {
              return (
                <Text key={item.id} style={styles.subService}>{item.name}</Text>
              );
            }
          })}
          <Text style={styles.service}>Newsletter:</Text>
          <Text style={styles.subService}>{props.newsletter ? "Subscribed" : ""}</Text>
          <Text style={styles.service}>Rental Club:</Text>
          <Text style={styles.subService}>{props.rentalMembership ? "Subscribed" : ""}</Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Subtotal: ${props.price.toFixed(2)}</Text>
          <Text style={styles.subTitle}>Sales Tax: ${(props.price * 0.06).toFixed(2)}{" "}</Text>
          <Text style={styles.subTitle}>Total: ${(props.price + props.price * 0.06).toFixed(2)}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <NavButton onNext={props.onNext}>Home</NavButton>
          </View>
        </View>
      </View>
    </LinearGradient>
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
    borderWidth: 2,
    borderColor: Colors.accentColor,
    borderRadius: 20,
    marginBottom: 5,
    paddingHorizontal: 10,
    // paddingTop: 30,
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
  },
  // title: {
  //   // fontWeight: "bold",
  //   color: Colors.primaryText,
  //   marginBottom: 10,
  //   marginHorizontal: 10,
  //   paddingVertical: 3,
  //   paddingHorizontal: 10,
  //   borderWidth: 2,
  //   borderRadius: 5,
  //   borderColor: Colors.accentColor,
  // },
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
    fontSize: 20,
    color: Colors.primaryText,
  },
  serviceContainer: {
    flex: 5,
  },
  subService: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold"
  },

})