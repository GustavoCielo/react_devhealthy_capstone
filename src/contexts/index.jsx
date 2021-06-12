import { AuthProvider } from "./Auth";
import { UserProvider } from "./User";
import { ModalProvider } from "./Modal";
import { GroupsProvider } from "./Groups";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <GroupsProvider>
          <ModalProvider>{children}</ModalProvider>
        </GroupsProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
