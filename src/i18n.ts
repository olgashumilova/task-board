import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import LandingPageEn from "./language/LandingPage/en.json";
import LandingPageRu from "./language/LandingPage/ru.json";

import SignInPageEn from "./language/SignInPage/en.json";
import SignInPageRu from "./language/SignInPage/ru.json";

import FeaturesPageEn from "./language/FeaturesPage/en.json";
import FeaturesPageRu from "./language/FeaturesPage/ru.json";
import HeaderEn from "./language/Header/en.json";
import HeaderRu from "./language/Header/ru.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: {
          landingPage: LandingPageRu,
          header: HeaderRu,
          featuresPage: FeaturesPageRu,
          signInPage: SignInPageRu,
        },
      },
      en: {
        translation: {
          landingPage: LandingPageEn,
          header: HeaderEn,
          featuresPage: FeaturesPageEn,
          signInPage: SignInPageEn,
        },
      },
    },
    // lng: "ru",
    fallbackLng: "ru",
  });
