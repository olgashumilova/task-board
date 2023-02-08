import {
  Box,
  Button,
  Input,
  Paper,
  Stack,
  Typography,
  TextField,
} from "@mui/material/";
import landingImage from "../../assets/landing-image.svg";

const styles = {
  titleContainer: {
    backgroundColor: "rgba(146, 227, 169, 0.6)",
    boxShadow: "0px 5px 34px 43px rgba(146, 227, 169, 0.6)",
    width: "90%",
  },
};

const LandingPage = () => {
  return (
    <Stack direction="row" padding={8}>
      <Stack width={"50%"} justifyContent={"space-around"} paddingLeft={2}>
        <Box style={styles.titleContainer}>
          <Typography variant="h3">Управляй своими идеями!</Typography>
          <Typography variant="h5" color={"#00433B"} marginTop={2}>
            TaskBoard - это простой и удобный инструмент для создания досок с
            задачами
          </Typography>
        </Box>

        <Stack width={"70%"} spacing={2} marginTop={6}>
          <Typography variant="h5" color={"#00433B"}>
            Хотите получить больше информации?
          </Typography>
          <Input placeholder="example@mail.com" />
          <Button variant="contained" color="success">
            Отправить
          </Button>
        </Stack>
      </Stack>

      <img width={"50%"} src={landingImage} alt="Landing image" />
    </Stack>
  );
};

export default LandingPage;
