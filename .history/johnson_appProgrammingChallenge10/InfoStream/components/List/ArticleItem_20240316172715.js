import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ArticleItem(props) {
  const navigation = useNavigation();

  function selectedArticleHandler() {
    navigation.navigate("ArticleDetail", {
      articleId: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable onPress={selectedArticleHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.author}>
            {props.headline}
          </Text>
          <Text style={styles.headline}>{props.author}</Text>
          <Text style={styles.headline}>
            Source: {props.agency}
          </Text>


        </View>
      </Pressable>
    </View>
  );
}

export default ArticleItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    height: 300
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  author: {
    fontSize: 30,
    fontFamily: "playfairBold",
    paddingBottom: 5,
    flex: 1
  },
  space: {
    fontSize: 25,
    fontFamily: "playfair",
    paddingBottom: 5
  },
  headline: {
    textAlign: "center",
    // width: "100%",
    fontSize: 15,
    fontFamily: "playfair",
    paddingBottom: 5,
    flexDirection: "row",
    flex: 1,
  }
});
