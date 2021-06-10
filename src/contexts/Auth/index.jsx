import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("@Dev:token") || "";

  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  return (
    <AuthContext.Provider
      value={{ token: isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
