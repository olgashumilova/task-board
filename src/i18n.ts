import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import LandingPageEn from "./language/LandingPage/en.json";
import HeaderEn from "./language/Header/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: {
          landingPage: {
            title: "Управляй своими идеями!",
            description:
              "TaskBoard - это простой и удобный инструмент для создания досок с задачами",
            formTitle: "Хотите получить больше информации?",
            formButton: "Отправить",
          },
          header: {
            home: "Главная",
            features: "Возможности",
            about: "О нас",
            signIn: "Войти",
            signUp: "Зарегистрироваться",
          },
        },
      },
      en: {
        translation: {
          landingPage: LandingPageEn,
          header: HeaderEn,
        },
      },
    },
    // lng: "ru",
    fallbackLng: "ru",
  });
