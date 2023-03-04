import { Stack, Button, Typography, Box } from "@mui/material";
import { ROUTES } from "../../routes";
import errorImage from "../../assets/error-image.svg";

const ErrorPage = () => {
  return (
    <Stack alignItems={"center"} height={"100vh"} justifyContent={"center"}>
      <Typography fontSize={"3rem"}>Упс!</Typography>
      <img width={"50%"} src={errorImage} alt="Task board" />
      <Typography fontSize={"2rem"} mt={4} mb={4} textAlign={"center"}>
        Такой страницы не существует
      </Typography>
      <Box mb={4}>
        <Button variant="contained" color="success" href={ROUTES.HOME}>
          На главную
        </Button>
      </Box>
    </Stack>
  );
};

export default ErrorPage;
