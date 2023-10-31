import React from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';

const Search = () => {
  const { userName } = useAuth();

  return (
    <div>
      <h1>Welcome, { userName }!</h1>
    </div>
  )
}

export default Search;