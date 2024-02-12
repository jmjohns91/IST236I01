import { useSafeAreaInsets } from "react-native-safe-area-context";






function HomeScreen(props) {
  //Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
  return (
    <View style={[
      styles.rootContainer,
      {
        paddingTop: insets.top,
        paddingBottom:,
        paddingLeft:,
        paddingRight:,
      }]}>

    </View>
  )
}
export default HomeScreen;