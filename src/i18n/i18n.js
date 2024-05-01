import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Function to get the value of a cookie by its name
function getCookieByName(name) {
  if (!document.cookie) {
    return null; // Handle case where cookies are disabled
  }
  const cookieValue = document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${name}=`));

  return cookieValue ? cookieValue.split("=")[1] : null;
}

// Get the value of the i18next cookie
const i18nextCookie = getCookieByName("i18next");

// Configuration for i18next
const i18nConfig = {
  debug: false,
  fallbackLng: "en",
  lng: i18nextCookie || document.documentElement.lang || "en",
  returnObjects: true,
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },
  detection: {
    order: ["localStorage", "cookie", "navigator"],
    caches: ["localStorage", "cookie"],
  },
};

// Initialize i18n with the configured settings
i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init(i18nConfig);

export default i18n;
