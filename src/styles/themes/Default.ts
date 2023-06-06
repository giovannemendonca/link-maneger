import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#008F89",
      light: "#008F8970",
    },
    secondary: {
      main: "#EB5B25",
      light: "#EB5B2570",
    },
    success: {
      main: "#006A00",
      light: "#006A0070",
    },
    warning: {
      main: "#FFC107",
      light: "#FFC10770",
    },
    info: {
      main: "#0081B9",
      light: "#0081B970",
    },
    background: {
      default: '#1E293B'
    },
    error: {
      main: '#940000'
    }
  },
});
