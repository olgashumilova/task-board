import { Stack, TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

const ErrorPage = () => {
  return (
    <Stack>
      <Typography>Такой страницы не существует</Typography>
      {/* <Link to={ROUTES.HOME}> */}
      <Button>На главную</Button>
      {/* </Link> */}
    </Stack>
  );
};

export default ErrorPage;
