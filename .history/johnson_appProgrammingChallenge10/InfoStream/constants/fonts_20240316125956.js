import * as Font from 'expo-font';
export const useFonts = async () => {
  await Font.loadAsync({
    "note": require("./assets/fonts/Note.ttf"),

  });
};