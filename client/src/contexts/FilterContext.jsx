import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }) {
  const [allBreeds, setAllBreeds] = useState(new Set());
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(14);
  const [curr, setCurr] = useState(0);
  const [sortDesc, setSortDesc] = useState(false);
  const [size, setSize] = useState(25);
  const [zipCodes, setZipCodes] = useState([]);

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
    size,
    setSize,
    zipCodes,
    setZipCodes,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}
