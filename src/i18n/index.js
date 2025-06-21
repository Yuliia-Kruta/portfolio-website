import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
//import HttpBackend from "i18next-http-backend";

import navbarEN from "../locales/en/navbar.json";
import navbarUA from '../locales/ua/navbar.json';

import heroEN from "../locales/en/hero.json";
import heroUA from '../locales/ua/hero.json';

import skillsEN from "../locales/en/skills.json";
import skillsUA from '../locales/ua/skills.json';

import projectsEN from "../locales/en/projects.json";
import projectsUA from '../locales/ua/projects.json';

const resources = {
  en: {
    navbar: navbarEN,
    hero: heroEN,
    skills: skillsEN,
    projects: projectsEN
  },
  ua: {
    navbar: navbarUA,
    hero: heroUA,
    skills: skillsUA,
    projects: projectsUA
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
    ns: ["navbar", "hero", "skills", "projects"],
    defaultNS: "navbar",
    interpolation: {
      escapeValue: false
    }
    //backend: {
      //loadPath: "../src/locales/{{lng}}/{{ns}}.json"
    //}
  });

export default i18n;