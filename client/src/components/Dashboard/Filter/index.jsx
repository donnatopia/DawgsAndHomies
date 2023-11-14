import React from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import { useFilter } from '../../../contexts/FilterContext.jsx';
import { BiSolidDog } from 'react-icons/bi';
import { MdBubbleChart } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import FilterOption from './FilterOption.jsx';
import BreedModal from './BreedModal.jsx';
import AgeModal from './AgeModal.jsx';
import LocationModal from './LocationModal.jsx';

const Filter = () => {
  const { filteredBreeds, minAge, maxAge, zipCodes } = useFilter();

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

  const {
    isOpen: isLocationOpen,
    onOpen: onLocationOpen,
    onClose: onLocationClose,
  } = useDisclosure();

  return (
    <>
      <Flex align="center" justify="center" gap={3} borderRadius="10%">
        <FilterOption
          icon={BiSolidDog}
          title="Breed"
          text={`${
            filteredBreeds.length === 0 ? 120 : filteredBreeds.length
          } Breed${filteredBreeds.length === 1 ? '' : 's'}`}
          onClick={onBreedOpen}
        />
        <FilterOption
          icon={MdBubbleChart}
          title="Age"
          text={minAge != maxAge ? `${minAge}-${maxAge} yrs` : `${minAge} yrs`}
          onClick={onAgeOpen}
        />
        <FilterOption
          icon={IoLocationSharp}
          title="Location"
          text={
            zipCodes.length === 0
              ? 'All Locations'
              : `${zipCodes.length} Location${zipCodes.length === 1 ? '' : 's'}`
          }
          onClick={onLocationOpen}
        />
      </Flex>
      <BreedModal isOpen={isBreedOpen} onClose={onBreedClose} />
      <AgeModal isOpen={isAgeOpen} onClose={onAgeClose} />
      <LocationModal isOpen={isLocationOpen} onClose={onLocationClose} />
    </>
  );
};

export default Filter;
