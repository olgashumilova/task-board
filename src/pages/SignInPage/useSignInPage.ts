import { useState } from "react";
import { useTranslation } from "react-i18next";

import * as yup from "yup";
import axios from "axios";

import { useFormik } from "formik";

export const useSignInPage = () => {
  const { t } = useTranslation();

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
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return { formik };
};
