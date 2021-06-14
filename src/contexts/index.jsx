import { AuthProvider } from "./Auth";
import { UserProvider } from "./User";
import { ModalProvider } from "./Modal";
import { GroupsProvider } from "./Groups";
import { UserGroupsProvider } from "./UserGroups";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <GroupsProvider>
          <UserGroupsProvider>
            <ModalProvider>{children}</ModalProvider>
          </UserGroupsProvider>
        </GroupsProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
