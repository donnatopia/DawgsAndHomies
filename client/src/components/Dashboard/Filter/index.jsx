import React from 'react';
import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { useFilter } from '../../../contexts/FilterContext.jsx';
import { BiSolidDog } from 'react-icons/bi';
import FilterOption from './FilterOption.jsx';
import FilterBreed from './FilterBreed.jsx';

const Filter = () => {
  const { filteredBreeds } = useFilter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex align="center" justify="center" gap={3} borderRadius="10%">
        <FilterOption
          icon={BiSolidDog}
          text={`${
            filteredBreeds.length === 0 ? 120 : filteredBreeds.length
          } Breed${filteredBreeds.length === 1 ? null : 's'}`}
          onClick={onOpen}
        />
        <Text fontSize="1.75em">|</Text>
      </Flex>
      <FilterBreed isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  );
};

export default Filter;
