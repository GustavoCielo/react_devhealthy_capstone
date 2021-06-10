import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("@Dev:token") || "";

  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const history = useHistory();

  const signup = (data) => {
    api
      .post("users/", data)
      .then((response) => {
        toast.success("Sucesso ao criar a conta! Faça seu login :D");
        history.push("/login");
      })
      .catch((error) => toast.error("Usuário já existe."));
  };

  const login = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        localStorage.setItem("@Dev:token", response.data.access);
        history.push("/dashboard");
      })
      .catch((error) => console.log(error));
  };

  const logout = () => {
    localStorage.removeItem("@Dev:token");
    setIsAuthenticated(false);
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        signup,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
