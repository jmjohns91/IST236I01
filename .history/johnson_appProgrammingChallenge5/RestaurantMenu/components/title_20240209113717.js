import { Text } from "react-native";


function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
  title: {
    flex: 1,
    alignItems: "center",
  }
})