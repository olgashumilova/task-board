import { Stack, TextField, Button, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSignInPage } from "./useSignInPage";
import ErrorMessageBox from "../../components/ErrorMessageBox/ErrorMessageBox";

const SignInPage = () => {
  const { t } = useTranslation();
  const { formik, errorMessage, setErrorMessage } = useSignInPage();

  return (
    <Stack alignItems="center" paddingTop={16} paddingBottom={10}>
      <Box minWidth={"30%"}>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={4}>
            <Typography variant="h5" textAlign={"center"}>
              {t("signInPage.title")}
            </Typography>
            <TextField
              fullWidth
              id="email"
              name="email"
              label={t("signInPage.email")}
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
              label={t("signInPage.password")}
              type="password"
              value={formik.values.password}
              onChange={(e) => {
                formik.handleChange(e);
                setErrorMessage("");
              }}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <ErrorMessageBox errorMessage={errorMessage} />
            <Button color="primary" variant="contained" fullWidth type="submit">
              {t("signInPage.button")}
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};

export default SignInPage;
