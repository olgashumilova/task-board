import { Stack, Typography } from "@mui/material/";
import useMediaQuery from "@mui/material/useMediaQuery";
import createYourBoardIcon from "../../assets/create-your-board-icon.svg";
import addTasksIcon from "../../assets/add-tasks-icon.svg";
import manageYourIdeasIcon from "../../assets/manage-your-ideas-icon.svg";

const styles = {
  featureContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "3px 3px 20px 3px rgba(0, 0, 0, 0.25)",
    minWidth: "20rem",
    height: "15rem",
  },
};

const FeaturesPage = () => {
  const isLargerThan640 = useMediaQuery("(min-width:640px)");

  return (
    <Stack spacing={4} padding={4}>
      <Stack mb={8} spacing={2}>
        <Typography fontSize={"3rem"}>Возможности TaskBoard</Typography>
        <Typography fontSize={"1.5rem"} color={"#00433B"}>
          TaskBoard - это простой и удобный инструмент для создания досок с
          задачами
        </Typography>
      </Stack>
      <Stack
        direction={isLargerThan640 ? "row" : "column"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
      >
        <Stack style={styles.featureContainer}>
          <img src={createYourBoardIcon} width={100}></img>
          <Typography mt={4} textAlign={"center"}>
            Создавайте свои доски
          </Typography>
        </Stack>
        <Stack style={styles.featureContainer}>
          <img src={addTasksIcon} width={100}></img>
          <Typography mt={4} textAlign={"center"}>
            Добавляйте задачи
          </Typography>
        </Stack>
        <Stack style={styles.featureContainer}>
          <img src={manageYourIdeasIcon} width={100}></img>
          <Typography mt={4} textAlign={"center"}>
            Управляйте своими идеями
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FeaturesPage;
