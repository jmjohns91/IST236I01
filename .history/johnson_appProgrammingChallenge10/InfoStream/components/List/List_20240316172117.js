import { View, StyleSheet, FlatList } from "react-native";
import ArticleItem from "./ArticleItem";
import Colors from '.../constants/colors';

function List(props) {
  function renderArticleItem(itemData) {
    const articleItemProps = {
      id: itemData.item.id,
      author: itemData.item.author,
      agency: itemData.item.agency,
      date: itemData.item.date,
      headline: itemData.item.headline,
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
    backgroundColor: Colors.primaryDark
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
