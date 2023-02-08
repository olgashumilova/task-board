import {
  Box,
  Paper,
  Typography,
  Divider,
  Container,
  Button,
  Link,
  Stack,
} from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";

const HeaderComponent = () => {
  return (
    <Stack
      width={"100%"}
      bgcolor={"primary.main"}
      height={80}
      direction={"row"}
      alignItems={"center"}
      paddingLeft={4}
    >
      <Link
        href="#"
        underline={"none"}
        color={"primary.contrastText"}
        marginRight={8}
      >
        <Stack direction="row" alignItems={"center"}>
          <TaskIcon sx={{ color: "white", fontSize: 40 }} />
          <Stack>
            <Typography
              sx={{
                color: "primary.contrastText",
                fontSize: 20,
                lineHeight: 1,
              }}
            >
              TASK
            </Typography>
            <Typography
              sx={{
                color: "primary.contrastText",
                fontSize: 20,
                lineHeight: 1,
              }}
            >
              BOARD
            </Typography>
          </Stack>
        </Stack>
      </Link>

      <Stack width={"100%"} direction="row" justifyContent={"space-between"}>
        <Stack direction="row" spacing={4} alignItems={"center"}>
          <Link href="#" underline="hover" color={"primary.contrastText"}>
            Главная
          </Link>
          <Link href="#" underline="hover" color={"primary.contrastText"}>
            Возможности
          </Link>
          <Link href="#" underline="hover" color={"primary.contrastText"}>
            О нас
          </Link>
        </Stack>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem color="white" />}
          spacing={2}
          marginRight={8}
        >
          <Button variant="text">
            <Typography color={"white"}>Войти</Typography>
          </Button>
          <Button variant="contained" color="success">
            Зарегистрироваться
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeaderComponent;
