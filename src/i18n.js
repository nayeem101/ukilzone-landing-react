import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translations
import translationEN from "./locales/en/translation.json";
import translationBN from "./locales/bn/translation.json";

// Define the resources
const resources = {
  en: {
    translation: translationEN,
  },
  bn: {
    translation: translationBN,
  },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'bn', // Initialize with bn
    fallbackLng: "en", // fallback language
    debug: true,
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
