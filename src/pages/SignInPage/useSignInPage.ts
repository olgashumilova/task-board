import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as yup from "yup";
import axios from "axios";

import { useFormik } from "formik";

import { signInUrlAPI } from "../../api/api";
import { ROUTES } from "../../routes";
import { isSignedIn, getUserProfile } from "../../redux/actions/actions";

export const useSignInPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const validationSchema = yup.object({
    email: yup
      .string()
      .email(t("signInPage.error.invalidEmail") as string)
      .required(t("signInPage.error.emptyEmail") as string),
    password: yup
      .string()
      .min(8, t("signInPage.error.shortPassword") as string)
      .required(t("signInPage.error.emptyPassword") as string),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const email = values.email;
      const password = values.password;

      try {
        await axios
          .post(signInUrlAPI, { email, password })
          .then((response) => {
            if (response.data) {
              dispatch(isSignedIn(true));
              dispatch(getUserProfile(response.data));
              localStorage.setItem("username", response.data.email);
              navigate(ROUTES.HOME);
            }
          })
          .catch(function (error) {
            setErrorMessage(error.response.data.message);
          });
      } catch (error) {
        console.error(error);
      }
    },
  });

  return { formik, errorMessage, setErrorMessage };
};
