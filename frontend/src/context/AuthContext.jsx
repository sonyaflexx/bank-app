import React, { createContext, useState, useEffect, useContext } from 'react';
import { makeObservable, observable, action } from 'mobx';
import { observer } from 'mobx-react';
import userStore from '../store/UserStore';
import api from '../api/index';
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  async function registration(req) {
    try {
      const { data } = await api.post("/api/user/sign-up", req);
      const token = data.token;
      userStore.setUser(jwtDecode(token));
      userStore.setIsLoggedIn(true);
      return jwtDecode(token);
    } catch (error) {
      console.log(error);
    }
  }

  async function login(req) {
    try {
      const response = await api.post("/api/user/sign-in", req);
      const token = response.data.token;
      userStore.setUser(jwtDecode(token));
      userStore.setIsLoggedIn(true);
      return token;
    } catch (e) {
      return (e.response);
    }
  }
  
  function logout() {
    userStore.setUser(null);
    userStore.setIsLoggedIn(false);
    
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
  }
  
  const authValue = {
    isLoading,
    login,
    registration,
    logout,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };