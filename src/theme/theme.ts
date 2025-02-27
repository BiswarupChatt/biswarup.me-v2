import { createTheme, Theme } from "@mui/material/styles";

// Step 1: Extend the Palette and PaletteOptions interfaces
declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      coral: string;
      blue: string;
      purple: string;
      orange: string;
      teal: string;
      magenta: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      coral?: string;
      blue?: string;
      purple?: string;
      orange?: string;
      teal?: string;
      magenta?: string;
    };
  }
}

// Light mode theme
const lightTheme: Theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',
  },
  palette: {
    mode: "light",
    primary: {
      main: "#000000", // Black
      light: "#333333", // Lighter shade of black
      dark: "#1a1a1a", // Darker shade
    },
    secondary: {
      main: "#ffffff", // White
      light: "#f5f5f5", // Off-white
      dark: "#e0e0e0", // Greyish white
    },
    background: {
      default: "#f5f5f5", // Slightly off-white
      paper: "#ffffff", // White background
    },
    text: {
      primary: "#000000", // Black text
      secondary: "#333333", // Lighter black
    },
    custom: {
      coral: "#F06292", // Pinkish-coral
      blue: "#5C6BC0", // Mid-tone blue
      purple: "#AB47BC", // Muted purple
      orange: "#FF7043", // Terracotta orange
      teal: "#26A69A", // Teal-ish aqua
      magenta: "#EC407A", // Bold magenta
    },
  },
});

// Dark mode theme
const darkTheme: Theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff", // White
      light: "#f5f5f5", // Off-white
      dark: "#e0e0e0", // Greyish white
    },
    secondary: {
      main: "#000000", // Black
      light: "#333333", // Lighter black
      dark: "#1a1a1a", // Darker black
    },
    background: {
      default: "#000000", // Dark background
      paper: "#18181b", // Lighter black for paper components
    },
    text: {
      primary: "#ffffff", // White text
      secondary: "#e0e0e0", // Lighter white
    },
    custom: {
      coral: "#F06292", // Pinkish-coral
      blue: "#5C6BC0", // Mid-tone blue
      purple: "#AB47BC", // Muted purple
      orange: "#FF7043", // Terracotta orange
      teal: "#26A69A", // Teal-ish aqua
      magenta: "#EC407A", // Bold magenta
    },
  },
});

export { lightTheme, darkTheme };
