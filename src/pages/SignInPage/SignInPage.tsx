import * as yup from "yup";
import { Stack, TextField, Button, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSignInPage } from "./useSignInPage";
import { useFormik } from "formik";

const SignInPage = () => {
  const { t } = useTranslation();

  const { formik } = useSignInPage();

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
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
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
