import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import zh from "./locales/zh";

const STORAGE_KEY = "personal-website-lang";

const savedLang = localStorage.getItem(STORAGE_KEY) as "en" | "zh" | null;
const defaultLang = savedLang && ["en", "zh"].includes(savedLang) ? savedLang : "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    zh: { translation: zh },
  },
  lng: defaultLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem(STORAGE_KEY, lng);
  document.documentElement.lang = lng === "zh" ? "zh-CN" : "en";
});

document.documentElement.lang = defaultLang === "zh" ? "zh-CN" : "en";

export default i18n;
