import { createTheme, Theme } from "@mui/material/styles";

// Extend the Palette and PaletteOptions interfaces
declare module "@mui/material/styles" {
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
    h1: {
      fontSize: "3.5rem", // Reduced from 4rem
      "@media (max-width:900px)": {
        fontSize: "2.75rem", // Reduced from 3rem
      },
      "@media (max-width:600px)": {
        fontSize: "2.25rem", // Reduced from 2.5rem
      },
    },
    h2: {
      fontSize: "3rem", // Reduced from 3.5rem
      "@media (max-width:900px)": {
        fontSize: "2.5rem", // Reduced from 2.75rem
      },
      "@media (max-width:600px)": {
        fontSize: "2rem", // Reduced from 2.25rem
      },
    },
    h3: {
      fontSize: "2.75rem", // Reduced from 3rem
      "@media (max-width:900px)": {
        fontSize: "2.25rem", // Reduced from 2.5rem
      },
      "@media (max-width:600px)": {
        fontSize: "1.75rem", // Reduced from 2rem
      },
    },
    h4: {
      fontSize: "2.25rem", // Reduced from 2.5rem
      "@media (max-width:900px)": {
        fontSize: "1.75rem", // Reduced from 2rem
      },
      "@media (max-width:600px)": {
        fontSize: "1.5rem", // Reduced from 1.75rem
      },
    },
    h5: {
      fontSize: "1.75rem", // Reduced from 2rem
      "@media (max-width:900px)": {
        fontSize: "1.5rem", // Reduced from 1.75rem
      },
      "@media (max-width:600px)": {
        fontSize: "1.25rem", // Reduced from 1.5rem
      },
    },
    h6: {
      fontSize: "1.25rem", // Reduced from 1.5rem
      "@media (max-width:900px)": {
        fontSize: "1rem", // Reduced from 1.25rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.875rem", // Reduced from 1rem
      },
    },
    subtitle1: {
      fontSize: "1.125rem", // Reduced from 1.25rem
      "@media (max-width:900px)": {
        fontSize: "1rem", // Reduced from 1.125rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.875rem", // Reduced from 1rem
      },
    },
    subtitle2: {
      fontSize: "1rem", // Reduced from 1.125rem
      "@media (max-width:900px)": {
        fontSize: "0.875rem", // Reduced from 1rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.75rem", // Reduced from 0.875rem
      },
    },
    body1: {
      fontSize: "0.875rem", // Reduced from 1rem
      "@media (max-width:900px)": {
        fontSize: "0.8125rem", // Reduced from 0.9375rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.75rem", // Reduced from 0.875rem
      },
    },
    body2: {
      fontSize: "0.75rem", // Reduced from 0.875rem
      "@media (max-width:900px)": {
        fontSize: "0.6875rem", // Reduced from 0.8125rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.625rem", // Reduced from 0.75rem
      },
    },
    caption: {
      fontSize: "0.625rem", // Reduced from 0.75rem
      "@media (max-width:900px)": {
        fontSize: "0.5625rem", // Reduced from 0.6875rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.5rem", // Reduced from 0.625rem
      },
    },
    overline: {
      fontSize: "0.625rem", // Reduced from 0.75rem
      "@media (max-width:900px)": {
        fontSize: "0.5625rem", // Reduced from 0.6875rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.5rem", // Reduced from 0.625rem
      },
    },
    button: {
      fontSize: "0.875rem", // Reduced from 1rem
      "@media (max-width:900px)": {
        fontSize: "0.75rem", // Reduced from 0.875rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.625rem", // Reduced from 0.75rem
      },
      textTransform: "none", // Unchanged
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
      light: "#333333",
      dark: "#1a1a1a",
    },
    secondary: {
      main: "#ffffff",
      light: "#f5f5f5",
      dark: "#e0e0e0",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000000",
      secondary: "#333333",
    },
    custom: {
      coral: {
        main: "#F06292",
        light: "#F48FB1",
        lighter: "#FFBCD9",
        dark: "#D81B60",
        darker: "#AD1457",
      },
      blue: {
        main: "#1E44A7",
        light: "#4A6BCF",
        lighter: "#839BF7",
        dark: "#162F7A",
        darker: "#0E1A4D",
      },
      purple: {
        main: "#AB47BC",
        light: "#CE93D8",
        lighter: "#E1BEE7",
        dark: "#8E24AA",
        darker: "#6A1B9A",
      },
      orange: {
        main: "#FF7043",
        light: "#FF9E7D",
        lighter: "#FFCCBC",
        dark: "#F4511E",
        darker: "#D84315",
      },
      teal: {
        main: "#26A69A",
        light: "#4DD0E1",
        lighter: "#80DEEA",
        dark: "#00897B",
        darker: "#00695C",
      },
      magenta: {
        main: "#EC407A",
        light: "#F06292",
        lighter: "#F8BBD0",
        dark: "#D81B60",
        darker: "#AD1457",
      },
    },
  },
});

// Dark mode theme
const darkTheme: Theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", sans-serif',
    h1: {
      fontSize: "3.5rem", // Reduced from 4rem
      "@media (max-width:900px)": {
        fontSize: "2.75rem", // Reduced from 3rem
      },
      "@media (max-width:600px)": {
        fontSize: "2.25rem", // Reduced from 2.5rem
      },
    },
    h2: {
      fontSize: "3rem", // Reduced from 3.5rem
      "@media (max-width:900px)": {
        fontSize: "2.5rem", // Reduced from 2.75rem
      },
      "@media (max-width:600px)": {
        fontSize: "2rem", // Reduced from 2.25rem
      },
    },
    h3: {
      fontSize: "2.75rem", // Reduced from 3rem
      "@media (max-width:900px)": {
        fontSize: "2.25rem", // Reduced from 2.5rem
      },
      "@media (max-width:600px)": {
        fontSize: "1.75rem", // Reduced from 2rem
      },
    },
    h4: {
      fontSize: "2.25rem", // Reduced from 2.5rem
      "@media (max-width:900px)": {
        fontSize: "1.75rem", // Reduced from 2rem
      },
      "@media (max-width:600px)": {
        fontSize: "1.5rem", // Reduced from 1.75rem
      },
    },
    h5: {
      fontSize: "1.75rem", // Reduced from 2rem
      "@media (max-width:900px)": {
        fontSize: "1.5rem", // Reduced from 1.75rem
      },
      "@media (max-width:600px)": {
        fontSize: "1.25rem", // Reduced from 1.5rem
      },
    },
    h6: {
      fontSize: "1.25rem", // Reduced from 1.5rem
      "@media (max-width:900px)": {
        fontSize: "1rem", // Reduced from 1.25rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.875rem", // Reduced from 1rem
      },
    },
    subtitle1: {
      fontSize: "1.125rem", // Reduced from 1.25rem
      "@media (max-width:900px)": {
        fontSize: "1rem", // Reduced from 1.125rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.875rem", // Reduced from 1rem
      },
    },
    subtitle2: {
      fontSize: "1rem", // Reduced from 1.125rem
      "@media (max-width:900px)": {
        fontSize: "0.875rem", // Reduced from 1rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.75rem", // Reduced from 0.875rem
      },
    },
    body1: {
      fontSize: "0.875rem", // Reduced from 1rem
      "@media (max-width:900px)": {
        fontSize: "0.8125rem", // Reduced from 0.9375rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.75rem", // Reduced from 0.875rem
      },
    },
    body2: {
      fontSize: "0.75rem", // Reduced from 0.875rem
      "@media (max-width:900px)": {
        fontSize: "0.6875rem", // Reduced from 0.8125rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.625rem", // Reduced from 0.75rem
      },
    },
    caption: {
      fontSize: "0.625rem", // Reduced from 0.75rem
      "@media (max-width:900px)": {
        fontSize: "0.5625rem", // Reduced from 0.6875rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.5rem", // Reduced from 0.625rem
      },
    },
    overline: {
      fontSize: "0.625rem", // Reduced from 0.75rem
      "@media (max-width:900px)": {
        fontSize: "0.5625rem", // Reduced from 0.6875rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.5rem", // Reduced from 0.625rem
      },
    },
    button: {
      fontSize: "0.875rem", // Reduced from 1rem
      "@media (max-width:900px)": {
        fontSize: "0.75rem", // Reduced from 0.875rem
      },
      "@media (max-width:600px)": {
        fontSize: "0.625rem", // Reduced from 0.75rem
      },
      textTransform: "none", // Unchanged
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
      light: "#f5f5f5",
      dark: "#e0e0e0",
    },
    secondary: {
      main: "#000000",
      light: "#333333",
      dark: "#1a1a1a",
    },
    background: {
      default: "#000000",
      paper: "#18181b",
    },
    text: {
      primary: "#ffffff",
      secondary: "#e0e0e0",
    },
    custom: {
      coral: {
        main: "#F06292",
        light: "#F48FB1",
        lighter: "#FFBCD9",
        dark: "#D81B60",
        darker: "#AD1457",
      },
      blue: {
        main: "#1E44A7",
        light: "#4A6BCF",
        lighter: "#839BF7",
        dark: "#162F7A",
        darker: "#0E1A4D",
      },
      purple: {
        main: "#AB47BC",
        light: "#CE93D8",
        lighter: "#E1BEE7",
        dark: "#8E24AA",
        darker: "#6A1B9A",
      },
      orange: {
        main: "#FF7043",
        light: "#FF9E7D",
        lighter: "#FFCCBC",
        dark: "#F4511E",
        darker: "#D84315",
      },
      teal: {
        main: "#26A69A",
        light: "#4DD0E1",
        lighter: "#80DEEA",
        dark: "#00897B",
        darker: "#00695C",
      },
      magenta: {
        main: "#EC407A",
        light: "#F06292",
        lighter: "#F8BBD0",
        dark: "#D81B60",
        darker: "#AD1457",
      },
    },
  },
});

export { lightTheme, darkTheme };
