import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
//import HttpBackend from "i18next-http-backend";

import navbarEN from "../locales/en/navbar.json";
import navbarUA from '../locales/ua/navbar.json';

import heroEN from "../locales/en/hero.json";
import heroUA from '../locales/ua/hero.json';

const resources = {
  en: {
    navbar: navbarEN,
    hero: heroEN
  },
  ua: {
    navbar: navbarUA,
    hero: heroUA
  },
};

i18n
  //.use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", 
    debug: true,
    ns: ["navbar", "hero"],
    defaultNS: "navbar",
    interpolation: {
      escapeValue: false
    }
    //backend: {
      //loadPath: "../src/locales/{{lng}}/{{ns}}.json"
    //}
  });

export default i18n;