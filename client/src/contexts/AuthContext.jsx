import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState('');

  const login = (name, email) => {
    setUser(name);

    return axios({
      method: 'post',
      withCredentials: true,
      url: 'https://frontend-take-home-service.fetch.com/auth/login',
      data: { name, email },
    });
  };

  const logout = () => {
    setUser('');

    return axios({
      method: 'post',
      withCredentials: true,
      url: 'https://frontend-take-home-service.fetch.com/auth/logout',
    });
  };

  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
