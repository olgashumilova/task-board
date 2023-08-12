import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as yup from "yup";
import axios from "axios";

import { useFormik } from "formik";
import { signUpUrlAPI } from "../../api/api";
import { ROUTES } from "../../routes";
import { setUser } from "../../redux/actions/actions";

export const useSignUpPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    repeatPassword: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .oneOf([yup.ref("password"), ""], "Passwords must match")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const email = values.email;
      const password = values.password;

      try {
        await axios
          .post(signUpUrlAPI, { email, password })
          .then((response) => {
            if (response.data) {
              dispatch(setUser(response.data));
              navigate(ROUTES.SIGNIN);
            } else {
            }
          })
          .catch(function (error) {
            console.log(error.response.data.message);

            setErrorMessage(error.response.data.message);
          });
      } catch (error) {
        console.error(error);
      }
    },
  });

  return { formik, errorMessage };
};
