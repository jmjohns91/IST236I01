import { StatusBar } from 'expo-status-bar';
import { useState, useMemo, useCallback } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, ScrollView, Switch, ImageBackground, Pressable, useWindowDimensions, Platform, Button, Modal } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import * as SplashScreen from "expo-splash-screen";
import Title from "../components/Title";
import NavButton from '../components/NavButtons';
import Colors from '../constants/colors';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import WheelPicker from 'react-native-wheely';





function HomeScreen() {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  const { width, height } = useWindowDimensions();
  const dateLabelFlex = {
    fontSize: width * 0.09
  }
  const dateTextFlex = {
    fontSize: width * 0.05
  }
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);
  const [showCheckOut, setShowCheckOut] = useState(false);
  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  const [numGuests, setNumGuests] = useState(0);
  const [showNumGuests, setShowNumGuests] = useState(false);
  const siteCounts = [1, 2, 3, 4, 5]
  const [numSites, setNumSites] = useState(0);
  const [showNumSites, setShowNumSites] = useState(false);
  const [results, setResults] = useState("");
  function showNumGuestsPicker() {
    setShowNumGuests(true);
  }
  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }
  function showNumSitesPicker() {
    setShowNumSites(true);
  }
  function hideNumSitesPicker() {
    setShowNumSites(false);
  }
  function onChangeNumGuests(index) {
    setNumGuests(index);
  }
  function onChangeNumSites(index) {
    setNumSites(index);
  }
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
  function onReserveHandler() {
    let res = `Check In:\t\t${checkIn.toDateString()}\n`
    res = res + `Check Out:\t\t${checkOut.toDateString()}\n`
    res = res + `Number of Guests:\t\t${guestCounts[numGuests]}\n`
    res = res + `Number of Campsites:\t\t${siteCounts[numSites]}\n`
    setResults(res);
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
              <Text style={[styles.dateTimeLabel, dateLabelFlex]}>
                Check In:
              </Text>
              <Pressable onPress={showCheckInPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkIn.toDateString()}
                </Text>
              </Pressable>
            </View>
            <View style={styles.dateTimeContainer}>
              <Text style={[styles.dateTimeLabel, dateLabelFlex]}>
                Check Out:
              </Text>
              <Pressable onPress={showCheckOutPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
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
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
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
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
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
          <View style={styles.rowContainer}>
            <Text style={[styles.dateTimeLabel, dateLabelFlex]}>
              Guests:
            </Text>
            <Pressable onPress={showNumGuestsPicker}>
              <View style={styles.dateTimeContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>{guestCounts[numGuests]}</Text>
              </View>
            </Pressable>
            <Modal
              animationType='slide'
              transparent={true}
              visible={showNumGuests}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>Enter Number of Guests:</Text>
                  <WheelPicker
                    selectedIndex={numGuests}
                    options={guestCounts}
                    onChange={onChangeNumGuests}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumGuestsPicker}></Button>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.rowContainer}>
            <Text style={[styles.dateTimeLabel, dateLabelFlex]}>
              Campsites:
            </Text>
            <Pressable onPress={showNumSitesPicker}>
              <View style={styles.dateTimeContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>{siteCounts[numSites]}</Text>
              </View>
            </Pressable>
            <Modal
              animationType='slide'
              transparent={true}
              visible={showNumSites}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>Enter Number of Campsites:</Text>
                  <WheelPicker
                    selectedIndex={numSites}
                    options={siteCounts}
                    onChange={onChangeNumSites}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumSitesPicker}></Button>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.buttonContainer}>
            <NavButton onNext={onReserveHandler}>Reserve Now</NavButton>
          </View>
        </View >
        <View style={styles.resultsContainer}>
          <Text style={[styles.results, dateLabelFlex]}>
            {results}
          </Text>
        </View>
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
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dateTimeContainer: {
    backgroundColor: Colors.primaryLightOverlay,
    padding: 20,
  },
  dateTimeLabel: {
    fontFamily: "sans",
    color: Colors.primaryText,
    textAlign: "center",
    textShadowColor: Colors.secondaryText,
    textShadowRadius: 5,
    flex: 1,

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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
  },
  dateText: {
    fontFamily: "condensed",
    fontWeight: "bold",
    textAlign: "center",
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: Colors.primaryDark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  resultsContainer: {

  },
  results: {
    textAlign: center,
    color: Colors.primaryText
  },
})