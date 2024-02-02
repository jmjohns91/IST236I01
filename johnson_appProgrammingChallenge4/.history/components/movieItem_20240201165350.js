import { SafeAreaView, StyleSheet, Text, View, FlatList, Image } from 'react-native';
function MovieItem(props) {
  return (
    <View>
      <View>
        <Text>{props.name}</Text>
      </View>
      <View>
        <Image source={props.image}></Image>
      </View>
      <View>
        <Text>Rating {props.rating} / 10</Text>
      </View>
    </View>
  );
}
export default MovieItem;