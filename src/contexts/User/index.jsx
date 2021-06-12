import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useAuth } from "../Auth";
import jwt_decode from "jwt-decode";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("@Dev:token")) || "";
  const [id, setId] = useState(0);
  const [user, setUser] = useState({});
  const [userGroups, setUserGroups] = useState([]);
  const [habits, setHabits] = useState([]);
  const { isAuthenticated } = useAuth();

  const getProfile = () => {
    const decoded = jwt_decode(token);
    localStorage.setItem("@Dev:token", JSON.stringify(token));
    setId(decoded.user_id);
    api
      .get(`users/${decoded.user_id}/`)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (isAuthenticated) {
      api
        .get("groups/subscriptions/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setUserGroups(response.data))
        .catch((error) => console.log(error));
    }
  }, [isAuthenticated]);

  const updateProfile = (data) => {
    api
      .patch(`users/${id}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getProfile())
      .catch((error) => console.log(error));
  };

  const getHabits = () => {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setHabits(response.data))
      .catch((error) => console.log(error));
  };

  const updateHabit = (habitId, howMuch) => {
    api
      .patch(`habits/${habitId}/`, howMuch, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getHabits())
      .catch((error) => console.log(error));
  };

  const deleteHabit = (habitId) => {
    api
      .delete(`habits/${habitId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => getHabits())
      .catch((error) => console.log(error));
  };

  return (
    <UserContext.Provider
      value={{
        token,
        id,
        user,
        userGroups,
        getProfile,
        updateProfile,
        habits,
        getHabits,
        updateHabit,
        deleteHabit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
