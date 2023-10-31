import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const ProtectedRoute = ({ children }) => {
  const { userName } = useAuth();

  if (!userName) {
    return <Navigate to='/' />;
  }
  return children;
}

export default ProtectedRoute;