import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import { FilterProvider } from './contexts/FilterContext.jsx';
import { MatchProvider } from './contexts/MatchContext.jsx';
import Login from './components/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Dashboard from './components/Dashboard/index.jsx';

const theme = extendTheme({
  colors: {
    brand: {
      darkpink: '#E66262',
      babypink: '#F4A9A9',
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <FilterProvider>
          <MatchProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Router>
          </MatchProvider>
        </FilterProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
