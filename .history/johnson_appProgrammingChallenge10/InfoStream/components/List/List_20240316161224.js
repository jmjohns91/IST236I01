import { View, StyleSheet, FlatList } from "react-native";
import ArticleItem from "./ArticleItem";

function List(props) {
  function renderArticleItem(itemData) {
    const articleItemProps = {
      id: itemData.item.id,
      price: itemData.item.price,
      bedrooms: itemData.item.bedrooms,
      bathrooms: itemData.item.bathrooms,
      squareFeet: itemData.item.squareFeet,
      date: itemData.item.date,
      headline: itemData.item.headline,
      city: itemData.item.city,
      state: itemData.item.state,
      zipCode: itemData.item.zipCode,
      imageUrl: itemData.item.imageUrl,
      description: itemData.item.description,
      listIndex: itemData.index,
    };
    return <ArticleItem {...articleItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderArticleItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black"
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
