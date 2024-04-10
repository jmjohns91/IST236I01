import * as util from '../index'

import * as Font from 'expo-font';

import {
  Barriecito_400Regular,
  BioRhyme_400Regular,
  BioRhyme_700Bold,
  CrimsonPro_400Regular,
  CrimsonPro_700Bold,
  Dokdo_400Regular,
  FingerPaint_400Regular,
  FreckleFace_400Regular,
  HomemadeApple_400Regular,
  JosefinSans_400Regular,
  JosefinSans_700Bold,
  Lacquer_400Regular,
  Lora_400Regular,
  Lora_400Regular_Italic,
  Lora_700Bold,
  Lora_700Bold_Italic,
  Montserrat_400Regular,
  Montserrat_700Bold,
  NanumPenScript_400Regular,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_700Bold_Italic,
  PlayfairDisplay_900Black,
  PlayfairDisplay_900Black_Italic,
  Quattrocento_400Regular,
  Quattrocento_700Bold,
  SedgwickAveDisplay_400Regular,
  Slackey_400Regular,
  Zeyada_400Regular,
  MajorMonoDisplay_400Regular
} from '@expo-google-fonts/dev';

export const Fonts = () => {
  const [fontsLoaded, setFontsLoaded] = util.useState(false);
  const [fontError, setFontError] = util.useState(null);

  util.useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          // Fonts needing files
          // "note": require("../assets/fonts/Note.ttf"),
          // "papernotesBold": require("../assets/fonts/Papernotes_Bold.ttf"),
          // "papernotesSketch": require("../assets/fonts/Papernotes_Sketch.ttf"),
          // "paperNotes": require("../assets/fonts/Papernotes.ttf"),
          // "squealer": require("../assets/fonts/Squealer.otf"),
          // "squealerHeader": require("../assets/fonts/SquealerEmbossed.otf"),
          // "pokerKings": require("../assets/fonts/PokerKings-Regular.ttf"),
          // "poker": require("../assets/fonts/Poker.ttf"),
          // "kollektif": require("../assets/fonts/Kollektif.ttf"),
          // "kollektifBold": require("../assets/fonts/Kollektif-Bold.ttf"),
          // "kollektifBoldItalic": require("../assets/fonts/Kollektif-BoldItalic.ttf"),
          // "kollektifItalic": require("../assets/fonts/Kollektif-Italic.ttf"),
          "etnaSS": require("../assets/fonts/Etna-Sans-serif.otf"),
          // Google fonts
          // "Zeyada": Zeyada_400Regular,
          // "Slackey": Slackey_400Regular,
          // "SedgwickAveDisplay": SedgwickAveDisplay_400Regular,
          // "Quattrocento": Quattrocento_400Regular,
          // "QuattrocentoBold": Quattrocento_700Bold,
          // "Playfair": PlayfairDisplay_400Regular,
          // "PlayfairBold": PlayfairDisplay_700Bold,
          // "PlayfairBlack": PlayfairDisplay_900Black,
          // "PlayfairItalic": PlayfairDisplay_400Regular_Italic,
          // "PlayfairBoldItalic": PlayfairDisplay_700Bold_Italic,
          // "PlayfairBlackItalic": PlayfairDisplay_900Black_Italic,
          // "NanumPenScript": NanumPenScript_400Regular,
          "Montserrat": Montserrat_400Regular,
          // "MontserratBold": Montserrat_700Bold,
          // "Lora": Lora_400Regular,
          // "LoraBold": Lora_700Bold,
          // "LoraItalic": Lora_400Regular_Italic,
          // "LoraBoldItalic": Lora_700Bold_Italic,
          // "Lacquer": Lacquer_400Regular,
          // "JosefinSans": JosefinSans_400Regular,
          // "JosefinSansBold": JosefinSans_700Bold,
          // "HomemadeApple": HomemadeApple_400Regular,
          // "FreckleFace": FreckleFace_400Regular,
          // "FingerPaint": FingerPaint_400Regular,
          "Dokdo": Dokdo_400Regular,
          // "CrimsonPro": CrimsonPro_400Regular,
          // "CrimsonProBold": CrimsonPro_700Bold,
          // "BioRhyme": BioRhyme_400Regular,
          // "BioRhymeBold": BioRhyme_700Bold,
          // "Barriecito": Barriecito_400Regular,
          "MajorMono": MajorMonoDisplay_400Regular,
        });
        setFontsLoaded(true);
      } catch (error) {
        setFontError(error);
      }
    }

    loadFonts();
  }, []);

  return [fontsLoaded, fontError];
};