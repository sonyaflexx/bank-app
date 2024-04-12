import { createContext, useState, useEffect } from "react";
import api from "../api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsLoggedIn(true);
      setToken(storedToken);
    }
    setIsLoading(false);
  }, []);

  async function registration(data) {
    try {
      const response = await api.post("/api/user/sign-up", data);
      const token = response.data.token;
      setIsLoggedIn(true);
      setToken(token);
      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      console.log(error);
    }
  }

  async function login(data) {
    try {
      const response = await api.post("/api/user/sign-in", {data});
      const token = response.data.token;
      setIsLoggedIn(true);
      setToken(token);
      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  }

  function logout() {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem("token");
  }

  const authValue = {
    isLoggedIn,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };