import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/global";
import Routes from "./routes";

import FullContainer from "./components/FullContainer";
import AllGroups from "./components/AllGroups";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <ToastContainer />
      {/* <Routes /> */}
      <FullContainer>
        <AllGroups />
      </FullContainer>
    </ThemeProvider>
  );
};

export default App;
