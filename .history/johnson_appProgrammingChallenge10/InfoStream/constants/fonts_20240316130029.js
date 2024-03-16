import * as Font from 'expo-font';
export const useFonts = async () => {
  await Font.loadAsync({
    "note": require("./assets/fonts/Note.ttf"),
    "papernotesBold": require("./assets/fonts/Papernotes_Bold.ttf"),
    "papernotesSketch": require("./assets/fonts/Papernotes_Sketch.ttf"),
    "paperNotes": require("./assets/fonts/Papernotes.ttf"),
    "nanumPen": require("./assets/fonts/NanumPenScript-Regular.ttf"),
    "homemadeApple": require("./assets/fonts/HomemadeApple-Regular.ttf"),
    "Zeyada": require("./assets/fonts/Zeyada-Regular.ttf"),
    "bioRhyme": require("./assets/fonts/BioRhyme-Regular.ttf"),
    "josefin": require("./assets/fonts/JosefinSans-Regular.ttf"),
    "lora": require("./assets/fonts/Lora-Regular.ttf"),
    "playfair": require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    "montserrat": require("./assets/fonts/Montserrat-Regular.ttf"),
    "crimson": require("./assets/fonts/CrimsonText-Regular.ttf"),
    "quattro": require("./assets/fonts/Quattrocento-Regular.ttf")
  });
};