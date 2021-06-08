import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#F6EFEE",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#E365C1",
      light: "#E2B6CF",
    },
    secondary: {
      main: "#8ECC8E",
    },
  },
});

export { theme };
