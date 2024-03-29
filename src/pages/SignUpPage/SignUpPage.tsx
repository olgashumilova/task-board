import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Stack, TextField, Button, Typography } from "@mui/material";
import { Formik, Field, Form, FormikHelpers } from "formik";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const SignUpPage = () => {
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

  return (
    <Stack
      // height={"100%"}
      alignItems="center"
      //padding={10}
    >
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={4}>
          <Typography variant="h5" textAlign={"center"}>
            Регистрация
          </Typography>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Электронная почта"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Пароль"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Зарегистрироваться
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default SignUpPage;
