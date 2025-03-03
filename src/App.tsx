import { useState, useEffect } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Container,
  Fade,
  Box,
} from "@mui/material";
import { darkTheme, lightTheme } from "./theme/theme";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./route/AppRoute";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("theme");
    return savedMode === "dark";
  });
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = (): void => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsDarkMode((prev) => !prev);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Fade in={!isTransitioning} timeout={300}>
          <Container
            maxWidth="lg"
            sx={{
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: 5,
              backgroundColor: (theme) => theme.palette.background.paper,
            }}
          >
            <Box sx={{ mt: 10 }}></Box>
            <AppRoute />
          </Container>
        </Fade>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
