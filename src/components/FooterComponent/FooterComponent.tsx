import { Box, Stack } from "@mui/material/";

const FooterComponent = () => {
  return (
    <Stack
      width={"100%"}
      bgcolor={"primary.main"}
      height={80}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      paddingLeft={4}
      color={"white"}
    >
      © TaskBoard, 2023 г.
    </Stack>
  );
};

export default FooterComponent;
