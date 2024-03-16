import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useLayoutEffect } from "react";
import { articles } from "../data/dummy_data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";
import { ScrollView } from "react-native";

function NewsDetailsScreen(props) {
  const articleId = props.route.params.articleId;
  const selectedArticle = articles.find((article) => article.id === articleId);

  const [pressed, setPressed] = useState(false);

  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: selectedArticle.imageUrl }}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.price}>
            {selectedArticle.headline}
          </Text>
          <Text style={styles.space}>
            By: {selectedArticle.author} | {selectedArticle.date}
          </Text>
          <Text style={styles.address}>
            Source: {selectedArticle.agency}
          </Text>
          <Text style={styles.description}>
            {selectedArticle.description}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default NewsDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: "center",
  },
  price: {
    color: Colors.primaryText,
    fontSize: 35,
    fontFamily: "playfairBold",
    paddingBottom: 5,
  },
  space: {
    color: Colors.primaryText,
    fontSize: 25,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  address: {
    color: Colors.primaryText,
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  year: {
    color: Colors.primaryText,
    fontSize: 25,
    fontFamily: "playfair",
    marginBottom: 30,
  },
  description: {
    color: Colors.primaryText,
    width: "90%",
    textAlign: "justify",
    fontSize: 15,
    fontFamily: "playfair",
  }
});