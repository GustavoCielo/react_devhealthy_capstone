import { useState, useEffect, createContext, useContext } from "react";
import api from "../../services/api.js";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [url] = useState("/groups/");
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

  const getGroups = (url) => {
    api
      .get(url)
      .then((res) => {
        setGroups(res.data.results);
        setNext(res.data.next);
        setPrevious(res.data.previous);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGroups(url);
  }, []);

  const handleNext = () => {
    getGroups(next);
  };

  const handlePrev = () => {
    if (previous !== null) {
      getGroups(previous);
    }
  };

  return (
    <GroupsContext.Provider
      value={{ groups, handleNext, handlePrev, previous, next }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
