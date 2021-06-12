import { AuthProvider } from "./Auth";
import { UserProvider } from "./User";
import { ModalProvider } from "./Modal";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <ModalProvider>{children}</ModalProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
