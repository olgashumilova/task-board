import { Stack, TextField, Button, Typography, Box } from "@mui/material/";
import { ROUTES } from "../../routes";
import { useSignUpPage } from "./useSignUpPage";

const SignUpPage = () => {
  const { formik, errorMessage } = useSignUpPage();

  return (
    <>
      <Button variant="contained" color="success" href={ROUTES.HOME}>
        На главную
      </Button>
      <Stack alignItems="center" paddingTop={16} paddingBottom={10}>
        <Box minWidth={"300px"}>
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
              {errorMessage && (
                <Box borderRadius={2} bgcolor={"#ffe6e6"} width={"100%"}>
                  <Typography color="red" paddingLeft={2}>
                    {errorMessage}
                  </Typography>
                </Box>
              )}
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
