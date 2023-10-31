import React from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    logout()
      .then(() => {
        console.log('Success Logging Out');
        navigate('/');
      })
      .catch((err) => {
        console.log('Error Logging Out', err);
      })
  }

  return (
    <div>
      <h1>Welcome, { user }!</h1>
      <button onClick={ handleLogout}>Log Out</button>
    </div>
  )
}

export default Search;