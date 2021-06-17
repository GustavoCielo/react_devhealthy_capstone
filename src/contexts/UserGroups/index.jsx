import { useUser } from "../User";
import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const UserGroupsContext = createContext();

export const UserGroupsProvider = ({ children }) => {
  const { token, getGroups, setHasGroup } = useUser();
  const [actualGroup, setActualGroup] = useState({});

  const createGroup = (data) => {
    api
      .post("groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHasGroup(true);
        getGroups();
      })
      .catch((error) => console.log(error));
  };

  const getAGroup = (id) => {
    api
      .get(`/groups/${id}/`)
      .then((response) => setActualGroup(response.data))
      .catch((error) => console.log(error));
  };

  const leaveGroup = (id) => {
    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getGroups())
      .catch((error) => console.log(error));
  };

  const addGoal = (data, id) => {
    api
      .post("goals/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getAGroup(id))
      .catch((error) => console.log(error));
  };

  const deleteGoal = (id, groupId) => {
    api
      .delete(`/goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getAGroup(groupId))
      .catch((error) => console.log(error));
  };

  const addActivity = (data, id) => {
    api
      .post("activities/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getAGroup(id))
      .catch((error) => console.log(error));
  };

  
  const deleteActivity = (id, groupId) => {
    api
      .delete(`/activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getAGroup(groupId))
      .catch((error) => console.log(error));
  };

  return (
    <UserGroupsContext.Provider
      value={{
        createGroup,
        getAGroup,
        actualGroup,
        leaveGroup,
        addGoal,
        addActivity,
        deleteGoal,
        deleteActivity
      }}
    >
      {children}
    </UserGroupsContext.Provider>
  );
};

export const useUserGroups = () => useContext(UserGroupsContext);
