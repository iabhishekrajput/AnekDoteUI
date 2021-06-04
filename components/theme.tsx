import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A100,
    },
    background: {
      default: "#0b0e11",
      paper: "#151a21",
    },
    text: {
      primary: "#dee3ea",
    },
  },
});

export default theme;
