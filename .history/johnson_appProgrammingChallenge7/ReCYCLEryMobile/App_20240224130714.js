import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentOrder, setCurrentOrder] = useState([
  ]);
  //set screenHandler functions for each screen
  function orderReviewScreenHandler() {
    setCurrentScreen("orderReview");
  }
  function homeScreenHandler() {
    setCurrentScreen("home");
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
