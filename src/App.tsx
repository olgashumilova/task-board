import theme from "./provider/theme";
import { ThemeProvider } from "@mui/material/styles";

import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandindPage";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";

function App() {
  let isUserLoggedIn = false;

  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent />
      {isUserLoggedIn ? <HomePage /> : <LandingPage />}
      <FooterComponent />
    </ThemeProvider>
  );
}

export default App;
