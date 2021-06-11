import { AuthProvider } from "./Auth";
import { ModalProvider } from "./Modal";
import { GroupsProvider } from "./Groups";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <GroupsProvider>
        <ModalProvider>{children}</ModalProvider>
      </GroupsProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
