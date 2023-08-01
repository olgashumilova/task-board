import {
  Box,
  Button,
  Stack,
  Typography,
  Modal,
  TextField,
} from "@mui/material/";
import landingImage from "../../assets/landing-image.svg";
import { useTranslation } from "react-i18next";
import { useLandingPage } from "./useLandingPage";

const styles = {
  titleContainer: {
    backgroundColor: "rgba(146, 227, 169, 0.6)",
    boxShadow: "0px 5px 34px 43px rgba(146, 227, 169, 0.6)",
    width: "100%",
  },
  modal: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
    width: "40%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
  },
};

const LandingPage = () => {
  const { t } = useTranslation();
  const { open, modalResponse, handleClose, formik } = useLandingPage();

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

          <form onSubmit={formik.handleSubmit}>
            <Stack height={"8rem"} justifyContent={"space-between"}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Электронная почта"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                placeholder={"example@mail.com"}
              />

              <Button variant="contained" color="success" type="submit">
                {t("landingPage.formButton")}
              </Button>
            </Stack>
          </form>

          <Modal open={open} onClose={handleClose}>
            <Box sx={styles.modal}>
              <Typography>{modalResponse}</Typography>
            </Box>
          </Modal>
        </Stack>
      </Stack>

      <img width={"50%"} src={landingImage} alt="Task board" />
    </Stack>
  );
};

export default LandingPage;
