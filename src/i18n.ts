import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

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
          landingPage: {
            title: "Manage your ideas!",
            description:
              "TaskBoard - is a simple and convenient tool for creating tasboards",
            formTitle: "Do you want to get more information?",
            formButton: "Send",
          },
          header: {
            home: "Home",
            features: "Features",
            about: "About",
            signIn: "Sign In",
            signUp: "Sign Up",
          },
        },
      },
    },
    // lng: "ru",
    fallbackLng: "ru",
  });
