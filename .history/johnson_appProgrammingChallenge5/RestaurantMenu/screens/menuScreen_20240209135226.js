import { useState } from 'react';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking, FlatList } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Title from "../components/title";
import NavButton from '../components/navButtons';






function MenuScreen(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  const [MenuItems, setMenuitems] = useState([
    {
      name: "Pan Fried Dumplings",
      image: require("../assets/images/dumplings.png"),
      price: "$9.25",
      id: 1,
    },
    {
      name: "Hunan Tofu",
      image: require("../assets/images/hunanTofu.png"),
      price: "$14.95",
      id: 2,
    },
    {
      name: "House Fried Rice",
      image: require("../assets/images/houseFriedRice.jpg"),
      price: "$9.25",
      id: 3,
    },
    {
      name: "Egg Roll",
      image: require("../assets/images/eggroll.jpg"),
      price: "$4.95",
      id: 4,
    },
    {
      name: "Chinese Donuts",
      image: require("../assets/images/chineseDonuts.png"),
      price: "$8.95",
      id: 5,
    },
  ])
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
        <FlatList


        />
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