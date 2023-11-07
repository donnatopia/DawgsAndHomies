import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }) {
  const [allBreeds, setAllBreeds] = useState(new Set());
  const [filteredBreeds, setFilteredBreeds] = useState([]);

  const value = {
    allBreeds,
    setAllBreeds,
    filteredBreeds,
    setFilteredBreeds,
  }

  return (
    <FilterContext.Provider value={ value }>
      { children }
    </FilterContext.Provider>
  )
}