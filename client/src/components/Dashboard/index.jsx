import React, { useState, useEffect } from 'react';
import { Flex, SimpleGrid, Box, Button, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useFilter } from '../../contexts/FilterContext.jsx';
import Card from './Card/index.jsx';
import Filter from './Filter/index.jsx';
import Header from './Header/index.jsx';
import Match from './Match/index.jsx';

const Dashboard = () => {
  const {
    setAllBreeds,
    filteredBreeds,
    sortDesc,
    curr,
    setCurr,
    minAge,
    maxAge,
    size,
    zipCodes,
  } = useFilter();

  const [dogs, setDogs] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

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
        size: size,
        from: curr,
        breeds: filteredBreeds,
        ageMin: minAge,
        ageMax: maxAge,
        zipCodes: zipCodes,
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
  }, [zipCodes, size, minAge, maxAge, curr, filteredBreeds, sortDesc]);

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
    <Box p={10} w="100%" h="100%" bg="brand.lightpink">
      <Header />
      <Box py={5} justify="center">
        <Filter />
      </Box>
      <Match />
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
