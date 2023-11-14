import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }) {
  const [allBreeds, setAllBreeds] = useState(new Set());
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(20);
  const [curr, setCurr] = useState(0);
  const [sortDesc, setSortDesc] = useState(false);

  const value = {
    allBreeds,
    setAllBreeds,
    filteredBreeds,
    setFilteredBreeds,
    sortDesc,
    setSortDesc,
    curr,
    setCurr,
    minAge,
    setMinAge,
    maxAge,
    setMaxAge,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}
