import { StatusBar } from 'expo-status-bar';
import { useState, useMemo, useCallback } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, ScrollView, Switch, ImageBackground, Pressable, useWindowDimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from "expo-splash-screen";
import Title from "../components/Title";
import NavButton from '../components/NavButtons';
import Colors from '../constants/colors';






function HomeScreen(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  function showCheckInPicker() {
    setShowCheckIn(true);
  }
  function showCheckOutPicker() {
    setShowCheckOut(true);
  }
  function hideCheckInPicker() {
    setShowCheckIn(false);
  }
  function hideCheckInPicker() {
    setShowCheckOut(false);
  }
  return (
    <ImageBackground
      source={require("../assets/images/camping.jpg")}
      resizeMode='cover'
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      <ScrollView style={styles.scrollContainer}>
        <View style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          }, { width: width }]}>

          <View style={styles.titleContainer}>
            <Title>
              Blue Sky Campgrounds
            </Title>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.dateTimeContainer}>
              <Text style={styles.dateTimeLabel}>
                Check In:
              </Text>
              <Pressable onPress={showCheckInPicker}>
                <Text style={styles.dateText}>
                  {checkIn.toDateString()}
                </Text>
              </Pressable>
            </View>
            <View style={styles.dateTimeContainer}>
              <Text style={styles.dateTimeLabel}>
                Check Out:
              </Text>
              <Pressable onPress={showCheckOutPicker}>
                <Text style={styles.dateText}>
                  {checkOut.toDateString()}
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.wheelPickerContainer}>
            <Text style={styles.wheelPickerLabel}>
              Guests:
            </Text>
          </View>
          <View style={styles.wheelPickerContainer}>
            <Text style={styles.wheelPickerLabel}>
              Campsites:
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <NavButton onNext={props.onNext}>Reserve Now</NavButton>
          </View>
        </View >
      </ScrollView>
    </ImageBackground>
  )
}
export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    justifyContent: "center",
    backgroundColor: Colors.primaryLight,
    borderRadius: 20,
    alignItems: "center",
    borderColor: Colors.primaryDark,
    borderWidth: 3,
    width: 1000,
    maxWidth: "90%",
  },
  buttonContainer: {

    justifyContent: "center",
    alignItems: "center",
  },
  dateTimeContainer: {

    backgroundColor: Colors.primaryLight,
  },
  wheelPickerContainer: {

    backgroundColor: Colors.primaryLight,
  },
  dateTimeLabel: {
    fontFamily: "sans",
    fontSize: 25,
    color: Colors.primaryText,
  },
  wheelPickerLabel: {
    fontFamily: "sans",
    fontSize: 25,
    color: Colors.primaryText,
  },
  backgroundImage: {
    opacity: 0.2,
    overlayColor: Colors.primaryLightOverlay,
  },
  scrollContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "100%",
  },
  rowContainer: {
    flexDirection: "row",
  },
  dateText: {
    fontFamily: "condensed",
    fontSize: 25,
  },

})