import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import Dog from './Dog.jsx';

const Search = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [dogs, setDogs] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [pageQuery, setPageQuery] = useState('/dogs/search');
  const [prev, setPrev] = useState('');
  const [next, setNext] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [size, setSize] = useState(25);

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

  const handlePrev = (e) => {
    e.preventDefault();
    setPageNum(pageNum - 1);
    setPageQuery(prev);
  }

  const handleNext = (e) => {
    e.preventDefault();
    setPageNum(pageNum + 1);
    setPageQuery(next);
  }

  useEffect(() => {
    axios({
      method: 'get',
      withCredentials: true,
      url: `https://frontend-take-home-service.fetch.com${pageQuery}`,
      params: {
        size: size,
      }
    })
      .then(({ data }) => {
        const { resultIds, total, prev, next } = data;

        setTotalResults(total);
        setPrev(prev);
        setNext(next);

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
  }, [pageQuery]);

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
      <p>Viewing {(pageNum * size) - size + 1}-{ Math.min(pageNum * size, totalResults) } out of {totalResults}</p>
      { prev ? <button onClick={ handlePrev }>Previous</button> : null }
      { next ? <button onClick={ handleNext }>Next</button> : null }
    </div>
  )
}

export default Search;