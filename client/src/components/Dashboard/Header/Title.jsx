import React from 'react';
import { Flex, Image, Heading } from '@chakra-ui/react';

const Title = () => {
  return (
    <Flex align="center" gap={5}>
      <Image
        src="https://raw.githubusercontent.com/donnatopia/fetch/5878715dfafcf42c18309dd7abaec6369bcf159b/client/dist/logo.png"
        alt="Dawgs & Homies Logo"
        boxSize="80px"
      />
      <Heading textTransform="uppercase" size="md">
        Dawgs & Homies
      </Heading>
    </Flex>
  );
};

export default Title;
