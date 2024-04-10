import { StyleSheet } from "react-native";
import { Colors } from "./colors";
export const styles = StyleSheet.create({
  oldestProjectTitle: {
    color: Colors.secondaryText,
    fontFamily: 'etnaSS',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.background,
  },
  homeContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  homeCard: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: Colors.surface,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    color: Colors.secondaryText,
    fontFamily: 'etnaSS',
  },
  bigNumber: {
    fontFamily: 'MajorMono',
    color: Colors.accentColor,
    fontSize: 90,
  },
  blueButton: {
    backgroundColor: Colors.primary,
    color: Colors.primaryText,
    fontFamily: 'etnaSS',
    padding: 10,
    borderRadius: 10,
  },
  greenButton: {
    backgroundColor: Colors.accentColor,
    color: Colors.primaryText,
    fontFamily: 'etnaSS',
    padding: 10,
    borderRadius: 10,
  },
  oldestProjectTitle: {
    color: Colors.secondaryText,
    fontFamily: 'etnaSS',
    fontSize: 18,
  },
  daysSinceProgressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.surface,
  },
  daysSinceProgressLabel: {
    backgroundColor: Colors.accentColor,
    color: Colors.primaryText,
    fontFamily: 'etnaSS',
    padding: 3,
    borderRadius: 5,
  },
  daysSinceProgressNumber: {
    color: Colors.primary,
  },
  widgets: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ooP: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  hyperHands: {
    fontFamily: 'Dokdo',
    fontSize: 60,
    padding: -20,
    margin: -10,
    textAlign: 'left',
  },
  taskTracker: {
    fontFamily: 'etnaSS',
    fontSize: 35,
    textAlign: 'right',
    margin: -10,
    marginTop: -10,
    marginBottom: 3,
    marginRight: -90,

  },
  titleContainer: {
    backgroundColor: Colors.primary,
    padding: 10,
  },
  header: {
    backgroundColor: Colors.primary,
    padding: 10,
  },
  headerText: {
    color: Colors.primaryText,
    fontFamily: 'etnaSS',
    fontSize: 20,
  },
  container: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  projectCard: {
    backgroundColor: Colors.surface,
    margin: 10,
    borderRadius: 5,
    padding: 10,
  },
  projectIcon: {
    color: Colors.primaryVariant,
  },
  projectTitle: {
    color: Colors.secondaryText,
    fontFamily: 'etnaSS',
    fontSize: 18,
    paddingLeft: 10,
  },
  projectContents: {
    color: Colors.secondaryText,
    fontFamily: 'Montserrat',
    fontSize: 16,
  },
  redButton: {
    backgroundColor: Colors.error,
    padding: 10,
    borderRadius: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonText:
  {
    color: Colors.primaryText,
    fontFamily: 'etnaSS',
  },
  inputContents: {
    flex: 1,
    flexGrow: 1,
    borderColor: Colors.secondaryText,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    textAlignVertical: 'top',
    textAlign: 'left',
  },
  inputTitle: {
    borderColor: Colors.secondaryText,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    width: '100 %',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    flexDirection: 'column'
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: Colors.background,
    flexDirection: 'column'
  },
  projectIconContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'center',
    flex: 1,
  },
  iconButtons: {
    flexDirection: 'row',
  },
  buttonText: {
    color: Colors.primaryText,
    fontFamily: 'etnaSS',
  },
  buttonContainer: {
    maxHeight: '15%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titleContainer: {
    marginVertical: 10,
    flex: 1,
  },
  topContainer: {
    flex: 1,
  },
  contentsContainer: {
    flex: 1,
    //minHeight: '30%',
    // maxHeight: '80%',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  photoContainer: { flex: 1, },
  saveButton: {
    flex: 1,
    backgroundColor: Colors.accentColor,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: Colors.error,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
  bigButtonText: {
    color: Colors.primaryText,
    fontFamily: 'etnaSS',
    textAlign: 'center',
    fontSize: 40,
  },
  projectContainer: {
    flex: 1,
  },
  projectHeader: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
});