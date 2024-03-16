import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useLayoutEffect } from "react";
import { articles } from "../data/dummy_data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";

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
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedArticle.imageUrl }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.price}>
          ${selectedArticle.price.toLocaleString()}
        </Text>
        <Text style={styles.space}>
          {selectedArticle.bedrooms} Bed | {selectedArticle.bathrooms} Bath |{" "}
          {selectedArticle.squareFeet} SqFt
        </Text>

        <Text style={styles.address}>
          {selectedArticle.address}, {selectedArticle.city}{" "}
          {selectedArticle.state} {selectedArticle.zipCode}
        </Text>

        <Text style={styles.year}>
          Built: {selectedArticle.yearBuilt}
        </Text>

        <Text style={styles.description}>
          {selectedArticle.description}
        </Text>
      </View>
    </View>
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
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
  },
  price: {
    color: Colors.primary300,
    fontSize: 35,
    fontFamily: "playfairBold",
    paddingBottom: 5,
  },
  space: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  address: {
    color: Colors.primary300,
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  year: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "playfair",
    marginBottom: 30,
  },
  description: {
    color: Colors.primary300,
    width: "90%",
    textAlign: "justify",
    fontSize: 15,
    fontFamily: "playfair",
  }
});
