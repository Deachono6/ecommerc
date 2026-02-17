import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    background: {
      default: "#111111",
      paper: "#1a1a1a",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: "0.2em",
    },
    button: {
      letterSpacing: "0.2em",
    },
  },
});

export default theme;
