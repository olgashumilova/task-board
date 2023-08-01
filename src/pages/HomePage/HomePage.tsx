import { Stack, Typography, Button, Box } from "@mui/material/";
import { useTranslation } from "react-i18next";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const HomePage = () => {
  const { t } = useTranslation();
  const isTaskBoardEmpty = false;

  return (
    <Stack
      direction="row"
      justifyContent={"space-around"}
      spacing={4}
      padding={4}
    >
      <Stack mb={8} spacing={2}>
        <Typography fontSize={"2rem"}>Добро пожаловать в TaskBoard!</Typography>
        {isTaskBoardEmpty ? (
          <>
            <Typography fontSize={"1.5rem"} color={"#00433B"}>
              Давайте создадим первую доску!
            </Typography>
            <Button color="primary" variant="contained">
              Создать доску
            </Button>
          </>
        ) : (
          <>
            <Typography fontSize={"1.5rem"} color={"#00433B"}>
              Ваши доски:
            </Typography>
          </>
        )}
      </Stack>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar readOnly />
        </LocalizationProvider>
      </Box>
    </Stack>
  );
};

export default HomePage;
