import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import navbarEN from "../locales/en/navbar.json";
import navbarUA from '../locales/ua/navbar.json';

import heroEN from "../locales/en/hero.json";
import heroUA from '../locales/ua/hero.json';

import skillsEN from "../locales/en/skills.json";
import skillsUA from '../locales/ua/skills.json';

import projectsEN from "../locales/en/projects.json";
import projectsUA from '../locales/ua/projects.json';

import timelineEN from "../locales/en/timeline.json";
import timelineUA from '../locales/ua/timeline.json';

const resources = {
  en: {
    navbar: navbarEN,
    hero: heroEN,
    skills: skillsEN,
    projects: projectsEN,
    timeline: timelineEN
  },
  ua: {
    navbar: navbarUA,
    hero: heroUA,
    skills: skillsUA,
    projects: projectsUA,
    timeline: timelineUA
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", 
    debug: true,
    ns: ["navbar", "hero", "skills", "projects", "timeline"],
    defaultNS: "navbar",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;