import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "src/i18n/en.json";
import he from "src/i18n/he.json";

const resources = {
  en: { translation: en },
  he: { translation: he },
};

function setDirectionBasedOnLanguage(lang: string) {
  if (lang === "he") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "he";
  } else {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: "he", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: { escapeValue: false }, // React handles escaping
});

// Automatically set direction when language changes
i18n.on("languageChanged", setDirectionBasedOnLanguage);

// Set the initial direction
setDirectionBasedOnLanguage(i18n.language);

export default i18n;
