import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("@Dev:token") || "";

  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const history = useHistory();

  const signup = (user) => {
    console.log(user);
    api
      .post("users/", user)
      .then((_) => {
        toast.success("Sucesso ao criar a conta! Faça seu login :D");
        history.push("/login");
      })
      .catch((_) => toast.error("Usuário já existe."));
  };

  return (
    <AuthContext.Provider
      value={{ token: isAuthenticated, setIsAuthenticated, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
