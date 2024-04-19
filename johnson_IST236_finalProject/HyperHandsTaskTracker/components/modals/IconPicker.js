import { Colors, Fonts, styles } from '../../constants/index';
import * as util from '../../index';

const allIcons = Object.keys(util.Entypo.getRawGlyphMap());

export const IconPicker = ({ onIconPicked, currentIcon }) => {
  const [modalVisible, setModalVisible] = util.useState(false);
  const displayIcon = currentIcon || "plus";
  const handleIconPress = (iconName) => {
    onIconPicked(iconName);
    setModalVisible(false);
  };

  return (
    <util.View>
      <util.TouchableOpacity onPress={() => setModalVisible(true)}>
        <util.Entypo name={displayIcon} size={60} color={Colors.primary} />
      </util.TouchableOpacity>

      <util.Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <util.FlatList
          data={allIcons}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <util.TouchableOpacity onPress={() => handleIconPress(item)}>
              <util.Entypo name={item} size={60} color={Colors.primary} />
            </util.TouchableOpacity>
          )}
          numColumns={8}
        />
      </util.Modal>
    </util.View>
  );
};