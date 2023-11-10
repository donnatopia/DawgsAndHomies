import React, { createContext, useContext, useState } from 'react';

const MatchContext = createContext();

export function useMatch() {
  return useContext(MatchContext);
}

export function MatchProvider({ children }) {
  const [matchedDogs, setMatchedDogs] = useState({});

  const value = {
    matchedDogs,
    setMatchedDogs,
  };

  return (
    <MatchContext.Provider value={value}>{children}</MatchContext.Provider>
  );
}
