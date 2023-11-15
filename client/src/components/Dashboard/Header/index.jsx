import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import Title from './Title.jsx';
import Settings from './Settings.jsx';
import LogoutButton from './LogoutButton.jsx';

const Header = () => {
  return (
    <Flex justify="space-between" align="center" p={2}>
      <Title />
      <Flex align="center">
        <Settings />
        <Text fontSize="1.5em">|</Text>
        <LogoutButton />
      </Flex>
    </Flex>
  );
};

export default Header;
