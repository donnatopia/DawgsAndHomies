import React, { useState, useEffect } from 'react';
import { Center, Flex, SimpleGrid, Box, Heading, Button, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import Dog from './Dog.jsx';

const Search = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [dogs, setDogs] = useState([]);
  const [allBreeds, setAllBreeds] = useState([]);
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

  const toggleBreeds = (e) => {
    e.preventDefault();
  }

  const toggleAge = (e) => {
    e.preventDefault();
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

  useEffect(() => {
    axios(({
      method: 'get',
      withCredentials: true,
      url: 'https://frontend-take-home-service.fetch.com/dogs/breeds',
    }))
      .then(({ data }) => {
        setAllBreeds(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <Box p={10}>
      <Flex justify='space-between' p={2}>
        <Heading>Fetch</Heading>
        <Button onClick={ handleLogout}>Log Out</Button>
      </Flex>
      <Flex py={5} align='center' justify='center' gap={3}>
        <Text>Displaying Friends from </Text>
        <Button onClick={ toggleBreeds }>{ allBreeds.length } Breeds</Button>
        <Text> and </Text>
        <Button onClick={ toggleAge }>All Ages</Button>
      </Flex>
      <SimpleGrid
        minChildWidth='250px'
        columns={5}
        spacing={4}
      >
        { dogs.map((dog) => (
          <Box key={ dog.id }>
            <Dog dog={ dog }/>
          </Box>
        ))}
      </SimpleGrid>
      <Flex py={5} justify='space-between'>
        <Button onClick={ handlePrev } isDisabled={ prev ? false : true }>Previous</Button>
        <Text>Displaying {(pageNum * size) - size + 1}-{ Math.min(pageNum * size, totalResults) } out of {totalResults} results</Text>
        <Button onClick={ handleNext } isDisabled={ next ? false : true }>Next</Button>
      </Flex>
    </Box>
  )
}

export default Search;