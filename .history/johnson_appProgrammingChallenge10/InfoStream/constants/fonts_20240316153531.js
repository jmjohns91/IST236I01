import * as Font from 'expo-font';
import { useState, useEffect } from 'react';

export const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [fontError, setFontError] = useState(null);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          "note": require("../assets/fonts/Note.ttf"),
          "papernotesBold": require("../assets/fonts/Papernotes_Bold.ttf"),
          "papernotesSketch": require("../assets/fonts/Papernotes_Sketch.ttf"),
          "paperNotes": require("../assets/fonts/Papernotes.ttf"),
          "nanumPen": require("../assets/fonts/NanumPenScript-Regular.ttf"),
          "homemadeApple": require("../assets/fonts/HomemadeApple-Regular.ttf"),
          "squealer": require("../assets/fonts/Squealer.otf"),
          "squealerHeader": require("../assets/fonts/SquealerEmbossed.otf"),
          "pokerKings": require("../assets/fonts/PokerKings-Regular.ttf"),
          "poker": require("../assets/fonts/Poker.ttf"),
          "Zeyada": require("../assets/fonts/Zeyada-Regular.ttf"),
          "bioRhyme": require("../assets/fonts/BioRhyme-Regular.ttf"),
          "josefin": require("../assets/fonts/JosefinSans-Regular.ttf"),
          "josefinBold": require("../assets/fonts/JosefinSans-Bold.ttf"),
          "josefinBoldItalic": require("../assets/fonts/JosefinSans-BoldItalic.ttf"),
          "josefinExtraLight": require("../assets/fonts/JosefinSans-ExtraLight.ttf"),
          "josefinExtraLightItalic": require("../assets/fonts/JosefinSans-ExtraLightItalic.ttf"),
          "josefinItalicVar": require("../assets/fonts/JosefinSans-Italic-VariableFont_wght.ttf"),
          "josefinItalic": require("../assets/fonts/JosefinSans-Italic.ttf"),
          "josefinLight": require("../assets/fonts/JosefinSans-Light.ttf"),
          "josefinLightItalic": require("../assets/fonts/JosefinSans-LightItalic.ttf"),
          "josefinMedium": require("../assets/fonts/JosefinSans-Medium.ttf"),
          "josefinMediumItalic": require("../assets/fonts/JosefinSans-MediumItalic.ttf"),
          "josefinSemiBold": require("../assets/fonts/JosefinSans-SemiBold.ttf"),
          "josefinSemiBoldItalic": require("../assets/fonts/JosefinSans-SemiBoldItalic.ttf"),
          "josefinThin": require("../assets/fonts/JosefinSans-Thin.ttf"),
          "josefinThinItalic": require("../assets/fonts/JosefinSans-ThinItalic.ttf"),
          "josefinVar": require("../assets/fonts/JosefinSans-VariableFont_wght.ttf"),
          "loraBold": require("../assets/fonts/Lora-Bold.ttf"),
          "loraBoldItalic": require("../assets/fonts/Lora-BoldItalic.ttf"),
          "loraItalicVar": require("../assets/fonts/Lora-Italic-VariableFont_wght.ttf"),
          "loraItalic": require("../assets/fonts/Lora-Italic.ttf"),
          "loraMedium": require("../assets/fonts/Lora-Medium.ttf"),
          "loraMediumItalic": require("../assets/fonts/Lora-MediumItalic.ttf"),
          "lora": require("../assets/fonts/Lora-Regular.ttf"),
          "loraSemiBold": require("../assets/fonts/Lora-SemiBold.ttf"),
          "loraSemiBoldItalic": require("../assets/fonts/Lora-SemiBoldItalic.ttf"),
          "loraVar": require("../assets/fonts/Lora-VariableFont_wght.ttf"),
          "playfair": require("../assets/fonts/PlayfairDisplay-Regular.ttf"),
          "playfairBlack": require("../assets/fonts/PlayfairDisplay-Black.ttf"),
          "playfairBlackItalic": require("../assets/fonts/PlayfairDisplay-BlackItalic.ttf"),
          "playfairBold": require("../assets/fonts/PlayfairDisplay-Bold.ttf"),
          "playfairBoldItalic": require("../assets/fonts/PlayfairDisplay-BoldItalic.ttf"),
          "playfairExtraBold": require("../assets/fonts/PlayfairDisplay-ExtraBold.ttf"),
          "playfairExtraBoldItalic": require("../assets/fonts/PlayfairDisplay-ExtraBoldItalic.ttf"),
          "playfairItalic": require("../assets/fonts/PlayfairDisplay-Italic.ttf"),
          "playfairItalicVar": require("../assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf"),
          "playfairMedium": require("../assets/fonts/PlayfairDisplay-Medium.ttf"),
          "playfairMediumItalic": require("../assets/fonts/PlayfairDisplay-MediumItalic.ttf"),
          "playfairSemiBold": require("../assets/fonts/PlayfairDisplay-SemiBold.ttf"),
          "playfairSemiBoldItalic": require("../assets/fonts/PlayfairDisplay-SemiBoldItalic.ttf"),
          "playfairVar": require("../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
          "montserrat": require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserratBlack": require("../assets/fonts/Montserrat-Black.ttf"),
          "montserratBlackItalic": require("../assets/fonts/Montserrat-BlackItalic.ttf"),
          "montserratBold": require("../assets/fonts/Montserrat-Bold.ttf"),
          "montserratBoldItalic": require("../assets/fonts/Montserrat-BoldItalic.ttf"),
          "montserratExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
          "montserratExtraBoldItalic": require("../assets/fonts/Montserrat-ExtraBoldItalic.ttf"),
          "montserratItalic": require("../assets/fonts/Montserrat-Italic.ttf"),
          "montserratMedium": require("../assets/fonts/Montserrat-Medium.ttf"),
          "montserratMediumItalic": require("../assets/fonts/Montserrat-MediumItalic.ttf"),
          "montserratSemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
          "montserratSemiBoldItalic": require("../assets/fonts/Montserrat-SemiBoldItalic.ttf"),
          "montserratExtraLight": require("../assets/fonts/Montserrat-ExtraLight.ttf"),
          "montserratExtraLightItalic": require("../assets/fonts/Montserrat-ExtraLightItalic.ttf"),
          "montserratItalicVar": require("../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
          "montserratLight": require("../assets/fonts/Montserrat-Light.ttf"),
          "montserratLightItalic": require("../assets/fonts/Montserrat-LightItalic.ttf"),
          "montserratThin": require("../assets/fonts/Montserrat-Thin.ttf"),
          "montserratThinItalic": require("../assets/fonts/Montserrat-ThinItalic.ttf"),
          "montserratVar": require("../assets/fonts/Montserrat-VariableFont_wght.ttf"),
          "crimson": require("../assets/fonts/CrimsonText-Regular.ttf"),
          "crimsonBold": require("../assets/fonts/CrimsonText-Bold.ttf"),
          "crimsonBoldItalic": require("../assets/fonts/CrimsonText-BoldItalic.ttf"),
          "crimsonItalic": require("../assets/fonts/CrimsonText-Italic.ttf"),
          "crimsonSemiBold": require("../assets/fonts/CrimsonText-SemiBold.ttf"),
          "crimsonSemiBoldItalic": require("../assets/fonts/CrimsonText-SemiBoldItalic.ttf"),
          "quattro": require("../assets/fonts/Quattrocento-Regular.ttf"),
          "quattroBold": require("../assets/fonts/Quattrocento-Bold.ttf"),
          "kollektif": require("../assets/fonts/Kollektif.ttf"),
          "kollektifBold": require("../assets/fonts/Kollektif-Bold.ttf"),
          "kollektifBoldItalic": require("../assets/fonts/Kollektif-BoldItalic.ttf"),
          "kollektifItalic": require("../assets/fonts/Kollektif-Italic.ttf"),
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