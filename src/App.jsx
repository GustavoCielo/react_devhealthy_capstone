import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { theme } from "./styles/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from './routes'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer/>
      <Routes/>
    </ThemeProvider>
  );
};

export default App;
