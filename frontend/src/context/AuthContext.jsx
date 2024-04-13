import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode"
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

  async function registration(req) {
    try {
      const {data} = await api.post("/api/user/sign-up", req);
      const token = data.token;
      setIsLoggedIn(true);
      setToken(token);
      localStorage.setItem("token", token);
      return jwtDecode(token);
    } catch (error) {
      console.log(error);
    }
  }

  async function login(req) {
    try {
      const response = await api.post("/api/user/sign-in", req);
      const token = response.data.token;
      setIsLoggedIn(true);
      setToken(token);
      localStorage.setItem("token", token);
      return token;
    } catch (e) {
      return (e.response);
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
    registration,
    logout,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };