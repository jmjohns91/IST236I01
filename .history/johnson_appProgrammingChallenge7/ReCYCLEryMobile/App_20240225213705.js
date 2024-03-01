import { StatusBar } from 'expo-status-bar';
import { useState, useMemo, useCallback } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';
import { RadioGroup } from "react-native-radio-buttons-group";
import { BouncyCheckbox } from "react-native-bouncy-checkbox";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "note": require("./assets/fonts/Note.ttf"),
    "papernotesBold": require("./assets/fonts/Papernotes_Bold.ttf"),
    "papernotesSketch": require("./assets/fonts/Papernotes_Sketch.ttf"),
    "paperNotes": require("./assets/fonts/Papernotes.ttf"),
    "nanumPen": require("./assets/fonts/NanumPenScript-Regular.ttf"),
    "homemadeApple": require("./assets/fonts/HomemadeApple-Regular.ttf"),
    "Zeyada": require("./assets/fonts/Zeyada-Regular.ttf"),
    "bioRhyme": require("./assets/fonts/BioRhyme-Regular.ttf"),
    "josefin": require("./assets/fonts/JosefinSans-Regular.ttf"),
    "lora": require("./assets/fonts/Lora-Regular.ttf"),
    "playfair": require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    "montserrat": require("./assets/fonts/Montserrat-Regular.ttf"),
    "crimson": require("./assets/fonts/CrimsonText-Regular.ttf"),
    "quattro": require("./assets/fonts/Quattrocento-Regular.ttf")
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideasync();
    }
  })

  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentPrice, setCurrentPrice] = useState(0);

  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary,
        color: Colors.primaryLight,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary,
        color: Colors.primaryLight,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary,
        color: Colors.primaryLight,
      },
    ],
    []
  );

  const [repairTimeId, setRepairTimeId] = useState(0);
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);
  //set screenHandler functions for each screen
  function orderReviewHandler() {
    let price = 0;
    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        price = price + services[i].price
      }
    }
    if (rentalMembership) {
      price = price + 100
    }
    price = price + repairTimeRadioButtons[repairTimeId].price
    setCurrentPrice(price);
    setCurrentScreen("orderReview");
  }
  function homeScreenHandler() {
    setCurrentPrice(0);
    setCurrentScreen("home");
  }
  function setNewsletterHandler() {
    setNewsletter((previous) => !previous)
  }
  function setRentalMembershipHandler() {
    setRentalMembership((previous) => !previous)
  }
  function setServicesHandler(id) {
    setServices((prevServices) =>
      prevServices.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }
  function setRepairTimeRadioButtons(id) {
    setRepairTimeRadioButtons((prevRepairTimeRadioButtons) =>
      prevRepairTimeRadioButtons.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }
  let screen = (<HomeScreen
    rentalMembership={rentalMembership}
    newsletter={newsletter}
    repairTimeId={repairTimeId}
    services={services}
    repairTimeRadioButtons={repairTimeRadioButtons}
    onSetRepairTimeId={setRepairTimeId}
    onSetRentalMembership={setRentalMembershipHandler}
    onSetNewsletter={setNewsletterHandler}
    onSetServices={setServicesHandler}
    onSetRepairTimeRadioButtons={setRepairTimeRadioButtons}
    onNext={orderReviewHandler} />);
  if (currentScreen === "orderReview") {
    screen = <OrderReviewScreen
      repairTime={repairTimeRadioButtons[repairTimeId].value}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}
      price={currentPrice}
      onNext={homeScreenHandler} />;
  }
  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.textIcons,
    alignItems: 'center',
    justifyContent: "center",
  },
});
