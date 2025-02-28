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
// Light mode theme
const lightTheme: Theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',
  },
  palette: {
    mode: "light",
    primary: {
      main: "#000000", // Black
      light: "#333333", // Lighter black
      dark: "#1a1a1a", // Darker black
    },
    secondary: {
      main: "#ffffff", // White
      light: "#f5f5f5", // Off-white
      dark: "#e0e0e0", // Greyish white
    },
    background: {
      default: "#ffffff", // White background
      paper: "#f5f5f5", // Slightly off-white for paper
    },
    text: {
      primary: "#000000", // Black text
      secondary: "#333333", // Lighter black
    },
    custom: {
      coral: "#F06292", // Pinkish-coral
      blue: "#1E44A7", // Mid-tone blue
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
      main: "#ffffff", // White (inverted from lightTheme primary)
      light: "#f5f5f5", // Off-white
      dark: "#e0e0e0", // Greyish white
    },
    secondary: {
      main: "#000000", // Black (inverted from lightTheme secondary)
      light: "#333333", // Lighter black (adjusted for consistency)
      dark: "#1a1a1a", // Darker black
    },
    background: {
      default: "#000000", // Black background (inverted from lightTheme)
      paper: "#18181b", // Slightly lighter black for paper
    },
    text: {
      primary: "#ffffff", // White text (matches primary)
      secondary: "#e0e0e0", // Lighter white (matches primary.dark)
    },
    custom: {
      coral: "#F06292", // Pinkish-coral (unchanged)
      blue: "#1E44A7", // Mid-tone blue (unchanged)
      purple: "#AB47BC", // Muted purple (unchanged)
      orange: "#FF7043", // Terracotta orange (unchanged)
      teal: "#26A69A", // Teal-ish aqua (unchanged)
      magenta: "#EC407A", // Bold magenta (unchanged)
    },
  },
});

export { lightTheme, darkTheme };
