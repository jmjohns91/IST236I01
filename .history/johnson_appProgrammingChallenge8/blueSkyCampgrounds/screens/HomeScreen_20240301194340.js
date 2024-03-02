import { StatusBar } from 'expo-status-bar';
import { useState, useMemo, useCallback } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, ScrollView, Switch, ImageBackground, Pressable, useWindowDimensions, Platform, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from "expo-splash-screen";
import Title from "../components/Title";
import NavButton from '../components/NavButtons';
import Colors from '../constants/colors';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';





function HomeScreen(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const dateLabelFlex
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
  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }
  function onChangeCheckIn(event, selectedDate) {
    const currentDate = selectedDate
    if (Platform.OS === "android") {
      hideCheckInPicker(true);
    }
    setCheckIn(currentDate)
  }
  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate
    if (Platform.OS === "android") {
      hideCheckOutPicker(true);
    }
    setCheckOut(currentDate)
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
          <View>
            {showCheckIn && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckInAndroid"
                value={checkIn}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckIn}
              />
            )}
            {showCheckIn && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View>
                  <View>
                    <DateTimePicker
                      testID="dateTimePickerCheckIniOS"
                      value={checkIn}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckIn}
                    />
                    <Button title="Confirm" onPress={hideCheckInPicker}></Button>
                  </View>
                </View>
              </Modal>
            )}
          </View>
          <View>
            {showCheckOut && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckOutAndroid"
                value={checkOut}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckOut}
              />
            )}
            {showCheckOut && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View>
                  <View>
                    <DateTimePicker
                      testID="dateTimePickerCheckOutiOS"
                      value={checkIn}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckOut}
                    />
                    <Button title="Confirm" onPress={hideCheckOutPicker}></Button>
                  </View>
                </View>
              </Modal>
            )}
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
    backgroundColor: Colors.primaryLightOverlay,
    padding: 20,
  },
  wheelPickerContainer: {

    backgroundColor: Colors.primaryLightOverlay,

  },
  dateTimeLabel: {
    fontFamily: "sans",
    fontSize: 35,
    color: Colors.primaryText,
    textAlign: "center",
    textShadowColor: Colors.secondaryText,
    textShadowRadius: 5,
  },
  wheelPickerLabel: {
    fontFamily: "sans",
    fontSize: 35,
    color: Colors.primaryText,
  },
  backgroundImage: {
    opacity: 0.5,
  },
  scrollContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "100%",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
  },
  dateText: {
    fontFamily: "condensed",
    fontSize: 25,
    fontWeight: "bold",
  },

})