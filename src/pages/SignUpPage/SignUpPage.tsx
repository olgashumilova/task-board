import { Stack, TextField, Button, Typography, Box } from "@mui/material/";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../../routes";
import { useSignUpPage } from "./useSignUpPage";
import ErrorMessageBox from "../../components/ErrorMessageBox/ErrorMessageBox";

const SignUpPage = () => {
  const { t } = useTranslation();
  const { formik, errorMessage, setErrorMessage } = useSignUpPage();

  return (
    <>
      <Stack alignItems="center" paddingTop={16} paddingBottom={10}>
        <Box minWidth={"30%"}>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <Typography variant="h5" textAlign={"center"}>
                {t("signUpPage.sign_up")}
              </Typography>
              <TextField
                fullWidth
                id="email"
                name="email"
                label={t("signUpPage.email")}
                value={formik.values.email}
                onChange={(e) => {
                  formik.handleChange(e);
                  setErrorMessage("");
                }}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label={t("signUpPage.password")}
                type="password"
                value={formik.values.password}
                onChange={(e) => {
                  formik.handleChange(e);
                  setErrorMessage("");
                }}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                fullWidth
                id="repeatPassword"
                name="repeatPassword"
                label={t("signUpPage.repeat_password")}
                type="password"
                value={formik.values.repeatPassword}
                onChange={(e) => {
                  formik.handleChange(e);
                  setErrorMessage("");
                }}
                error={
                  formik.touched.repeatPassword &&
                  Boolean(formik.errors.repeatPassword)
                }
                helperText={
                  formik.touched.repeatPassword && formik.errors.repeatPassword
                }
              />
              <ErrorMessageBox errorMessage={errorMessage} />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                {t("signUpPage.sign_up")}
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </>
  );
};

export default SignUpPage;
