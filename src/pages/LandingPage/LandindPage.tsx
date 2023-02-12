import { Box, Button, Input, Stack, Typography } from "@mui/material/";
import landingImage from "../../assets/landing-image.svg";
import { useTranslation } from "react-i18next";

const styles = {
  titleContainer: {
    backgroundColor: "rgba(146, 227, 169, 0.6)",
    boxShadow: "0px 5px 34px 43px rgba(146, 227, 169, 0.6)",
    width: "90%",
  },
};

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <Stack direction="row" padding={8}>
      <Stack width={"50%"} justifyContent={"space-around"} paddingLeft={2}>
        <Box style={styles.titleContainer}>
          <Typography variant="h3">{t("landingPage.title")}</Typography>
          <Typography variant="h5" color={"#00433B"} marginTop={2}>
            {t("landingPage.description")}
          </Typography>
        </Box>

        <Stack width={"70%"} spacing={2} marginTop={6}>
          <Typography variant="h5" color={"#00433B"}>
            {t("landingPage.formTitle")}
          </Typography>
          <Input placeholder="example@mail.com" />
          <Button variant="contained" color="success">
            {t("landingPage.formButton")}
          </Button>
        </Stack>
      </Stack>

      <img width={"50%"} src={landingImage} alt="Landing image" />
    </Stack>
  );
};

export default LandingPage;
