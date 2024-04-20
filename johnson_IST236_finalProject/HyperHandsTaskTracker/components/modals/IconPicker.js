import { Colors, Fonts, styles, icons } from '../../constants/index';
import * as util from '../../index';
import { IconRenderer } from '../layout/IconRender';

export const IconPicker = ({ onIconPicked, currentIcon }) => {
  const [modalVisible, setModalVisible] = util.useState(false);
  const [selectedIcon, setSelectedIcon] = util.useState(() => currentIcon || { name: "add", library: "MaterialIcons" });
  util.useEffect(() => {
    if (currentIcon) {
      setSelectedIcon(currentIcon);
    }
  }, [currentIcon]);


  return (
    <util.View>
      <util.TouchableOpacity onPress={() => setModalVisible(true)}>
        <IconRenderer iconName={selectedIcon.name || "add"} iconLibrary={selectedIcon.library || "MaterialIcons"} size={60} color={Colors.primary} />
      </util.TouchableOpacity>

      <util.Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <util.FlatList
          data={icons}
          keyExtractor={(item) => `${item.library}-${item.name}`}
          renderItem={({ item }) => (
            <util.TouchableOpacity style={styles.iconPickerContainer} onPress={() => {
              onIconPicked(item);
              setSelectedIcon(item);
              setModalVisible(false);
            }}>
              <IconRenderer iconName={item.name} iconLibrary={item.library} size={50} color={Colors.primary} />
            </util.TouchableOpacity>
          )}
          numColumns={7}
        />
      </util.Modal>
    </util.View>
  );
};