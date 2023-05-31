import { createTheme } from "@mui/material";
import { colors } from "./Colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: colors[1],
    },
    secondary: {
      main: colors[2],
    },
  },
});
