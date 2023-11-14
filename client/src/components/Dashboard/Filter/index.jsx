import React from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import { useFilter } from '../../../contexts/FilterContext.jsx';
import { BiSolidDog } from 'react-icons/bi';
import { MdBubbleChart } from 'react-icons/md';
import FilterOption from './FilterOption.jsx';
import BreedModal from './BreedModal.jsx';

const Filter = () => {
  const { filteredBreeds } = useFilter();
  const {
    isOpen: isBreedOpen,
    onOpen: onBreedOpen,
    onClose: onBreedClose,
  } = useDisclosure();

  return (
    <>
      <Flex align="center" justify="center" gap={3} borderRadius="10%">
        <FilterOption
          icon={BiSolidDog}
          text={`${
            filteredBreeds.length === 0 ? 120 : filteredBreeds.length
          } Breed${filteredBreeds.length === 1 ? '' : 's'}`}
          onClick={onBreedOpen}
        />
        <FilterOption icon={MdBubbleChart} text="All Ages" />
      </Flex>
      <BreedModal
        isOpen={isBreedOpen}
        onOpen={onBreedOpen}
        onClose={onBreedClose}
      />
    </>
  );
};

export default Filter;
