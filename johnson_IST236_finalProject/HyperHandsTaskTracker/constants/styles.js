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
    fontSize: 35,
    flex: 2,
  },
  daysSinceProgressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    flex: 3,
  },
  daysSinceProgressLabel: {
    backgroundColor: Colors.accentColor,
    color: Colors.primaryText,
    fontFamily: 'etnaSS',
    padding: 3,
    borderRadius: 5,
    fontSize: 20,
    marginBottom: -10,
  },
  daysSinceProgressNumber: {
    color: Colors.primary,
    padding: 5,
    fontSize: 45,
    fontFamily: 'MajorMono',

  },
  widgets: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ooP: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  hyperHands: {
    fontFamily: 'Dokdo',
    fontSize: 60,
    padding: -20,
    margin: -10,
    marginTop: - 30,
    textAlign: 'left',
    color: Colors.primaryText,
  },
  taskTracker: {
    fontFamily: 'etnaSS',
    fontSize: 35,
    textAlign: 'right',
    margin: -10,
    marginTop: -5,
    marginBottom: 3,
    marginRight: -90,
    color: Colors.primaryText,

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
    alignItems: 'center',
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
    alignItems: 'center',
    flex: .5,
    marginLeft: -20,
  },
  iconButton: {
    padding: 2,
    paddingHorizontal: 5,
    margin: 5,
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
    flexDirection: 'column',
  },
  contentsContainer: {
    flex: 1,
    //minHeight: '30%',
    // maxHeight: '80%',
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  photoContainer: {
    flex: 1,
    alignItems: 'flex-start',

  },
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
  iconContainerOOP: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'center',
  },
  oldestTopContainer: {
    flexDirection: 'row',
  },
  projectsContainer: {
    flex: 1,
  },
  bigButton: {
    padding: 5,
    borderRadius: 10,
    flex: 2,
    minHeight: ' 9 %',
    margin: 3,
  },
  photoPicker: {
    alignItems: 'center',
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photo: {
    width: 100,
    height: 100,
    margin: 5,
  },

});