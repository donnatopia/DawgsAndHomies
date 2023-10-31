import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import Dog from './Dog.jsx';

const Search = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [dogs, setDogs] = useState([]);

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

  useEffect(() => {
    axios({
      method: 'get',
      withCredentials: true,
      url: 'https://frontend-take-home-service.fetch.com/dogs/search'
    })
      .then(({ data }) => {
        const { resultIds } = data;
        return axios({
          method: 'post',
          withCredentials: true,
          url: 'https://frontend-take-home-service.fetch.com/dogs/',
          data: resultIds
        })
      })
      .then(({ data }) => {
        setDogs(data);
      })
      .catch((err) => {
        console.log('Error getting dogs', err);
      })
  }, []);

  return (
    <div>
      <h1>Welcome, { user }!</h1>
      <button onClick={ handleLogout}>Log Out</button>
      <div>
        { dogs.map((dog) => (
          <div key={ dog.id }>
            <Dog dog={ dog }/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search;