import * as yup from "yup";
import { Stack, TextField, Button, Typography, Box } from "@mui/material";
import { useFormik } from "formik";
import { ROUTES } from "../../routes";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  repetPassword: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .required("Password is required"),
});

const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Button variant="contained" color="success" href={ROUTES.HOME}>
        На главную
      </Button>
      <Stack alignItems="center" paddingTop={16} paddingBottom={10}>
        <Box minWidth={"30%"}>
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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                fullWidth
                id="repeatPassword"
                name="repeatPassword"
                label="Повторите пароль"
                type="password"
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.repeatPassword &&
                  Boolean(formik.errors.repeatPassword)
                }
                helperText={
                  formik.touched.repeatPassword && formik.errors.repeatPassword
                }
              />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Зарегистрироваться
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </>
  );
};

export default SignUpPage;
