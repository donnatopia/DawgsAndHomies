import React from 'react';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { Box, Flex, Icon, Text, useDisclosure } from '@chakra-ui/react';
import DisplayModal from './DisplayModal.jsx';

const Sort = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box hover={{ cursor: 'pointer' }} onClick={onOpen}>
        <Flex direction="column" align="center" p={4}>
          <Icon as={BsFillGrid3X3GapFill} boxSize={6} />
          <Text pt={3} align="center">
            Display
          </Text>
        </Flex>
      </Box>
      <DisplayModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Sort;
