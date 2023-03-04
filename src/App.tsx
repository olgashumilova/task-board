import theme from "./provider/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import LandingPage from "./pages/LandingPage/LandindPage";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";

import { ROUTES } from "./routes";

function App() {
  let isUserLoggedIn = false;

  return (
    <ThemeProvider theme={theme}>
      {!Object.values(ROUTES).includes(window.location.pathname) ? (
        <ErrorPage />
      ) : (
        <>
          {!(window.location.href.indexOf(ROUTES.SIGNUP) !== -1) ? (
            <HeaderComponent />
          ) : null}
          <Router>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              minHeight={"100vh"}
            >
              <Routes>
                <Route
                  path={ROUTES.HOME}
                  element={isUserLoggedIn ? <HomePage /> : <LandingPage />}
                />
                <Route path={ROUTES.FEATURES} element={<FeaturesPage />} />
                <Route path={ROUTES.ABOUT} element={<AboutPage />} />
                <Route path={ROUTES.SIGNIN} element={<SignUpPage />} />
                <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
              </Routes>
              <FooterComponent />
            </Box>
          </Router>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
