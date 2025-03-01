import { createTheme, Theme } from "@mui/material/styles";

// Extend the Palette and PaletteOptions interfaces
declare module "@mui/material/styles" {
// Define a custom color type to extend the MUI Palette
interface CustomPaletteColor {
  main: string;
  light?: string;
  lighter?: string;
  dark?: string;
  darker?: string;
}
  interface Palette {
    custom: {
      coral: CustomPaletteColor;
      blue: CustomPaletteColor;
      purple: CustomPaletteColor;
      orange: CustomPaletteColor;
      teal: CustomPaletteColor;
      magenta: CustomPaletteColor;
    };
  }

  interface PaletteOptions {
    custom?: {
      coral?: CustomPaletteColor;
      blue?: CustomPaletteColor;
      purple?: CustomPaletteColor;
      orange?: CustomPaletteColor;
      teal?: CustomPaletteColor;
      magenta?: CustomPaletteColor;
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
      coral: {
        main: "#F06292", // Pinkish-coral
        light: "#F48FB1", // Lighter coral
        lighter: "#FFBCD9", // Very light coral
        dark: "#D81B60", // Darker coral
        darker: "#AD1457", // Very dark coral
      },
      blue: {
        main: "#1E44A7", // Mid-tone blue
        light: "#4A6BCF", // Lighter blue
        lighter: "#839BF7", // Very light blue
        dark: "#162F7A", // Darker blue
        darker: "#0E1A4D", // Very dark blue
      },
      purple: {
        main: "#AB47BC", // Muted purple
        light: "#CE93D8", // Lighter purple
        lighter: "#E1BEE7", // Very light purple
        dark: "#8E24AA", // Darker purple
        darker: "#6A1B9A", // Very dark purple
      },
      orange: {
        main: "#FF7043", // Terracotta orange
        light: "#FF9E7D", // Lighter orange
        lighter: "#FFCCBC", // Very light orange
        dark: "#F4511E", // Darker orange
        darker: "#D84315", // Very dark orange
      },
      teal: {
        main: "#26A69A", // Teal-ish aqua
        light: "#4DD0E1", // Lighter teal
        lighter: "#80DEEA", // Very light teal
        dark: "#00897B", // Darker teal
        darker: "#00695C", // Very dark teal
      },
      magenta: {
        main: "#EC407A", // Bold magenta
        light: "#F06292", // Lighter magenta
        lighter: "#F8BBD0", // Very light magenta
        dark: "#D81B60", // Darker magenta
        darker: "#AD1457", // Very dark magenta
      },
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
      default: "#000000", // Black background
      paper: "#18181b", // Slightly lighter black for paper
    },
    text: {
      primary: "#ffffff", // White text
      secondary: "#e0e0e0", // Lighter white
    },
    custom: {
      coral: {
        main: "#F06292", // Pinkish-coral
        light: "#F48FB1", // Lighter coral
        lighter: "#FFBCD9", // Very light coral
        dark: "#D81B60", // Darker coral
        darker: "#AD1457", // Very dark coral
      },
      blue: {
        main: "#1E44A7", // Mid-tone blue
        light: "#4A6BCF", // Lighter blue
        lighter: "#839BF7", // Very light blue
        dark: "#162F7A", // Darker blue
        darker: "#0E1A4D", // Very dark blue
      },
      purple: {
        main: "#AB47BC", // Muted purple
        light: "#CE93D8", // Lighter purple
        lighter: "#E1BEE7", // Very light purple
        dark: "#8E24AA", // Darker purple
        darker: "#6A1B9A", // Very dark purple
      },
      orange: {
        main: "#FF7043", // Terracotta orange
        light: "#FF9E7D", // Lighter orange
        lighter: "#FFCCBC", // Very light orange
        dark: "#F4511E", // Darker orange
        darker: "#D84315", // Very dark orange
      },
      teal: {
        main: "#26A69A", // Teal-ish aqua
        light: "#4DD0E1", // Lighter teal
        lighter: "#80DEEA", // Very light teal
        dark: "#00897B", // Darker teal
        darker: "#00695C", // Very dark teal
      },
      magenta: {
        main: "#EC407A", // Bold magenta
        light: "#F06292", // Lighter magenta
        lighter: "#F8BBD0", // Very light magenta
        dark: "#D81B60", // Darker magenta
        darker: "#AD1457", // Very dark magenta
      },
    },
  },
});

export { lightTheme, darkTheme };