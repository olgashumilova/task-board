import * as yup from "yup";
import { Stack, TextField, Button, Typography, Box } from "@mui/material";
import { useFormik } from "formik";

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

const SignInPage = () => {
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
    <Stack alignItems="center" paddingTop={16} paddingBottom={10}>
      <Box minWidth={"30%"}>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={4}>
            <Typography variant="h5" textAlign={"center"}>
              Вход
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
              Войти
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};

export default SignInPage;
