import { Typography, Divider, Button, Link, Stack } from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../../routes";

const HeaderComponent = () => {
  const { t } = useTranslation();

  return (
    <Stack
      bgcolor={"primary.main"}
      height={80}
      direction={"row"}
      alignItems={"center"}
      paddingLeft={4}
    >
      <Link
        href={ROUTES.HOME}
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
          <Link
            href={ROUTES.HOME}
            underline="hover"
            color={"primary.contrastText"}
          >
            {t("header.home")}
          </Link>
          <Link
            href={ROUTES.FEATURES}
            underline="hover"
            color={"primary.contrastText"}
          >
            {t("header.features")}
          </Link>
          <Link
            href={ROUTES.ABOUT}
            underline="hover"
            color={"primary.contrastText"}
          >
            {t("header.about")}
          </Link>
        </Stack>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem color="white" />}
          spacing={2}
          marginRight={8}
        >
          <Button variant="text">
            <Typography color={"white"}>{t("header.signIn")}</Typography>
          </Button>
          <Button variant="contained" color="success">
            {t("header.signUp")}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HeaderComponent;
