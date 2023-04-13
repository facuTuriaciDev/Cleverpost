import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        'searchCleverpost': "Search in Cleverpost"
      }
    },
    es: {
      translation: {
        'searchCleverpost': "Buscar en Cleverpost"
      }
    }
  }
});

const currentLanguage = i18next.language

//i18next.changeLanguage('es')

export default i18next;
