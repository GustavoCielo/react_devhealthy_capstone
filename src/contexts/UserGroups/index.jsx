import { useUser } from "../User";
import { createContext, useContext } from "react";
import api from "../../services/api";

const UserGroupsContext = createContext();

export const UserGroupsProvider = ({ children }) => {
  const { token } = useUser();

  const createGroup = (data) => {
    api
      .post("groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => console.log(error));
  };

  return (
    <UserGroupsContext.Provider
      value={{
        createGroup,
      }}
    >
      {children}
    </UserGroupsContext.Provider>
  );
};

export const useUserGroups = () => useContext(UserGroupsContext);
