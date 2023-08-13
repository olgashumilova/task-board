import {
  Typography,
  Divider,
  Button,
  Link,
  Stack,
  useMediaQuery,
} from "@mui/material";
import TaskIcon from "@mui/icons-material/Task";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../../routes";
import HeaderMenu from "./HeaderMenu";
import { useHeaderComponent } from "./useHeaderComponent";

const HeaderComponent = () => {
  const { t } = useTranslation();
  const isSmallerThan940 = useMediaQuery("(max-width:940px)");

  const { showRegisterButons, userProfile } = useHeaderComponent();
  console.log("showRegisterButons", showRegisterButons);
  console.log("userProfile", userProfile);

  return (
    <Stack
      bgcolor={"primary.main"}
      height={80}
      direction={"row"}
      alignItems={"center"}
      justifyContent={isSmallerThan940 ? "space-between" : "center"}
      paddingLeft={4}
      paddingRight={4}
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
      {isSmallerThan940 ? (
        <HeaderMenu />
      ) : (
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

          {showRegisterButons ? (
            <Stack
              direction="row"
              alignItems={"center"}
              divider={
                <Divider orientation="vertical" flexItem color="white" />
              }
              spacing={2}
              marginRight={8}
            >
              <Button variant="text" href={ROUTES.SIGNIN}>
                <Typography color={"white"}>{t("header.signIn")}</Typography>
              </Button>
              <Button variant="contained" color="success" href={ROUTES.SIGNUP}>
                {t("header.signUp")}
              </Button>
            </Stack>
          ) : (
            <Stack
              direction="row"
              alignItems={"center"}
              divider={
                <Divider orientation="vertical" flexItem color="white" />
              }
              spacing={2}
              marginRight={8}
            >
              <Typography color={"primary.contrastText"}>
                Привет, {userProfile?.email}
              </Typography>
              <Button variant="contained" color="success" href={ROUTES.HOME}>
                Выход
              </Button>
            </Stack>
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default HeaderComponent;
