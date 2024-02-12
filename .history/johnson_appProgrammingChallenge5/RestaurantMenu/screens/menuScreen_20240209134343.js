import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/title";
import NavButton from '../components/navButtons';




const [MenuItems, setMenuitems] = useState([
  {
    name: "Pan Fried Dumplings",
    image: require("../assets/images/dumplings.png"),
    price: "$9.25",
  }
])

function MenuScreen(props) {
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
      <View>
        <Title>Menu</Title>
      </View>
      <View>
        <NavButton onPress={props.onNext}>Home</NavButton>
      </View>
    </View>
  )
}
export default MenuScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  }
})