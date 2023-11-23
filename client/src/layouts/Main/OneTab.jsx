import React from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import Header from './Header.jsx';

const OneTab = ({ children }) => {
  return (
    <Grid
      bg="pink.100"
      templateAreas={`"header header header"
                      "space1 tab1 space2"
                      "folder1 folder1 folder1"`}
      gridTemplateRows={'60vh 35vh 5vh'}
      gridTemplateColumns={'30vw 40vw 30vw'}
    >
      <Header />
      <GridItem area={'tab1'}>
        <Box
          bg="pink.300"
          w="100%"
          h="100%"
          borderRadius="50px 50px 0 0"
          py={5}
          px={10}
        >
          {children}
        </Box>
      </GridItem>
      <GridItem area={'folder1'} bg="pink.300" />
    </Grid>
  );
};

export default OneTab;
