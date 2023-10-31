import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const value = {
    userName,
    setUserName,
    userEmail,
    setUserEmail
  };

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  )
}