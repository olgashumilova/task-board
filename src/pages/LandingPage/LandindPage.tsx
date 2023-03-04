import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Input, Stack, Typography, Modal } from "@mui/material/";
import landingImage from "../../assets/landing-image.svg";
import { useTranslation } from "react-i18next";
import { getHelpEmail } from "../../api/api";

const styles = {
  titleContainer: {
    backgroundColor: "rgba(146, 227, 169, 0.6)",
    boxShadow: "0px 5px 34px 43px rgba(146, 227, 169, 0.6)",
    width: "90%",
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

  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [modalResponse, setModalResponse] = useState("");

  const handleOpen = async () => {
    if (email !== "") {
      const response = await axios.post(getHelpEmail, { email });
      setModalResponse(response.data);
      setOpen(response.data !== "");
      console.log(response);
      console.log(email);
    }
  };
  const handleClose = () => {
    setEmail("");
    setOpen(false);
  };

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
          <Input
            placeholder="example@mail.com"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <Button variant="contained" color="success" onClick={handleOpen}>
            {t("landingPage.formButton")}
          </Button>

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
