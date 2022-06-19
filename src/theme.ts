import {createTheme} from "@mui/material/styles";

const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#b71c1c",
    },
    secondary: {
      main: "#1b5e20",
    },
    info: {
      main: "#424242",
    },
    background: {
      default: "#e0e0e0",
    },
  },
};

export const theme = createTheme(themeOptions);
