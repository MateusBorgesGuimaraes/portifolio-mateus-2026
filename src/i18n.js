import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationPTBR from "./locales/ptbr/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ptbr: {
        translation: translationPTBR,
      },
    },
    lng: "ptbr",
    fallbackLng: "ptbr",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
