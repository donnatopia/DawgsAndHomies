import React, { useState, useEffect } from 'react';
import { Flex, SimpleGrid, Box, Heading, Button, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext.jsx';
import { useFilter } from '../../contexts/FilterContext.jsx';
import { useNavigate } from 'react-router-dom';
import Card from './Card/index.jsx';
import Filter from './Filter/index.jsx';
import Sort from './Sort/index.jsx';

const Dashboard = () => {
  const { logout } = useAuth();
  const { setAllBreeds, filteredBreeds, sortDesc, curr, setCurr } = useFilter();
  const navigate = useNavigate();

  const [dogs, setDogs] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  const size = 25;

  const handleLogout = (e) => {
    e.preventDefault();

    logout()
      .then(() => {
        console.log('Success Logging Out');
        navigate('/');
      })
      .catch((err) => {
        console.log('Error Logging Out', err);
      });
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setCurr(curr - size);
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurr(curr + size);
  };

  useEffect(() => {
    const sort = sortDesc ? 'breed:desc' : 'breed:asc';

    axios({
      method: 'get',
      withCredentials: true,
      url: 'https://frontend-take-home-service.fetch.com/dogs/search',
      params: {
        sort: sort,
        from: curr,
        breeds: filteredBreeds,
      },
    })
      .then(({ data }) => {
        const { resultIds, total } = data;
        setTotalResults(total);

        return axios({
          method: 'post',
          withCredentials: true,
          url: 'https://frontend-take-home-service.fetch.com/dogs/',
          data: resultIds,
        });
      })
      .then(({ data }) => {
        setDogs(data);
      })
      .catch((err) => {
        console.log('Error getting dogs', err);
      });
  }, [curr, filteredBreeds, sortDesc]);

  useEffect(() => {
    axios({
      method: 'get',
      withCredentials: true,
      url: 'https://frontend-take-home-service.fetch.com/dogs/breeds',
    })
      .then(({ data }) => {
        setAllBreeds(new Set(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAllBreeds]);

  return (
    <Box p={10}>
      <Flex justify="space-between" p={2}>
        <Heading>Fetch</Heading>
        <Button onClick={handleLogout}>Log Out</Button>
      </Flex>
      <Flex py={5} gap={2} justify="space-between">
        <Filter />
        <Sort />
      </Flex>
      <SimpleGrid minChildWidth="250px" columns={5} spacing={4}>
        {dogs.map((dog) => (
          <Box key={dog.id}>
            <Card dog={dog} />
          </Box>
        ))}
      </SimpleGrid>
      <Flex py={5} justify="space-between">
        <Button onClick={handlePrev} isDisabled={curr === 0 ? true : null}>
          Previous
        </Button>
        <Text>
          Displaying {curr + 1}-{Math.min(curr + size, totalResults)} out of{' '}
          {totalResults} results
        </Text>
        <Button
          onClick={handleNext}
          isDisabled={curr + size > totalResults ? true : null}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default Dashboard;
