import { Typography, Box } from "@mui/material/";

interface ErrorMessageBoxProps {
  errorMessage: string;
}

const ErrorMessageBox = ({ errorMessage }: ErrorMessageBoxProps) => {
  return errorMessage ? (
    <Box borderRadius={2} bgcolor={"#ffe6e6"} padding={2}>
      <Typography color="red">{errorMessage}</Typography>
    </Box>
  ) : null;
};

export default ErrorMessageBox;
