import React from 'react';
import { GridItem, Text, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <GridItem area={'header'} p={10} align="center">
      <Text fontSize="96px" color="pink.300" fontFamily="Wellfleet">
        Dawgs & Homies
      </Text>
      <Text as="b" color="pink.200" fontSize="40px">
        Find Your Furry Best Friend
      </Text>
      <Image
        src="https://raw.githubusercontent.com/donnatopia/fetch/5878715dfafcf42c18309dd7abaec6369bcf159b/client/dist/logo.png"
        alt="Dawgs & Homies Logo"
        boxSize="150px"
      />
      <Text color="pink.200" fontSize="40px">
        Simpler. Better. With Love.
      </Text>
    </GridItem>
  );
};

export default Header;
