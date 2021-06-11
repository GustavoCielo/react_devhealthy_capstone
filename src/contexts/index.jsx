import { AuthProvider } from "./Auth";
import { ModalProvider } from "./Modal";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ModalProvider>{children}</ModalProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
