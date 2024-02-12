import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, StyleSheet, Pressable, Text } from "react-native";
import Title from "../components/title";





function HomeScreen(props) {
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
        <Title>
          Three Color Chinese Restaurant
        </Title>
      </View>
    </View>
  )
}
export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  }
})