import React from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import { useFilter } from '../../../contexts/FilterContext.jsx';
import { BiSolidDog } from 'react-icons/bi';
import { MdBubbleChart } from 'react-icons/md';
import FilterOption from './FilterOption.jsx';
import BreedModal from './BreedModal.jsx';
import AgeModal from './AgeModal.jsx';

const Filter = () => {
  const { filteredBreeds } = useFilter();
  const {
    isOpen: isBreedOpen,
    onOpen: onBreedOpen,
    onClose: onBreedClose,
  } = useDisclosure();

  const {
    isOpen: isAgeOpen,
    onOpen: onAgeOpen,
    onClose: onAgeClose,
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
        <FilterOption
          icon={MdBubbleChart}
          text="All Ages"
          onClick={onAgeOpen}
        />
      </Flex>
      <BreedModal isOpen={isBreedOpen} onClose={onBreedClose} />
      <AgeModal isOpen={isAgeOpen} onClose={onAgeClose} />
    </>
  );
};

export default Filter;
