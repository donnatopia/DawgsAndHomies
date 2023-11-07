import React, { useEffect, useState } from 'react';
import {
  Flex,
  Text,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useFilter } from '../../../contexts/FilterContext.jsx';
import FilterBreed from './FilterBreed.jsx';

const Filter = () => {
  const { filteredBreeds } = useFilter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex py={5} align='center' justify='center' gap={3}>
        <Text>Displaying Friends from </Text>
        <Button onClick={ onOpen }>
          { filteredBreeds.length === 0 ? 120 : filteredBreeds.length } Breed{ filteredBreeds.length === 1 ? null : 's' }
        </Button>
      </Flex>
      <FilterBreed
        isOpen={ isOpen }
        onOpen={ onOpen }
        onClose={ onClose }
      />
    </>
  )
}

export default Filter;