import { Colors, Fonts, styles } from '../../constants/index';
import * as util from '../../index';
import { HomeScreen, ProjectIdeasScreen, StartedProjectsScreen } from '../../screens/index';
export const IconPicker = () => {
  return (
    <util.View style={styles.container}>
      <util.Text style={styles.title}>IconPicker</util.Text>
    </util.View>
  );
}