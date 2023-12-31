import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  Input,
  Wrap,
  WrapItem,
  Text,
  Icon,
  Heading,
} from '@chakra-ui/react';
import { MdCancel } from 'react-icons/md';
import { BiSolidDog } from 'react-icons/bi';
import { useFilter } from '../../../contexts/FilterContext.jsx';

// Helper Function
const titleCase = (word) =>
  word
    .split(' ')
    .map((word) => {
      let firstLetter = word[0].toUpperCase();
      let restOfWord = word.slice(1).toLowerCase();
      return firstLetter + restOfWord;
    })
    .join(' ');

// BreedModal Component
const BreedModal = ({ isOpen, onClose }) => {
  const { filteredBreeds, allBreeds, setFilteredBreeds, setCurr } = useFilter();
  const [inputBreed, setInputBreed] = useState('');
  const [message, setMessage] = useState('');

  const addBreed = (e) => {
    e.preventDefault();
    const currBreed = titleCase(inputBreed);

    if (filteredBreeds.length > 80) {
      setMessage('Maximum Breeds Added');
    } else if (filteredBreeds.indexOf(currBreed) !== -1) {
      setMessage(`Already Added "${currBreed}"`);
    } else if (allBreeds.has(currBreed)) {
      setFilteredBreeds([...filteredBreeds, currBreed]);
      setMessage('');
      setCurr(0);
    } else {
      setMessage(`No Such Breed Named "${currBreed}"`);
    }

    setInputBreed('');
  };

  const deleteBreed = (e, breed) => {
    e.preventDefault();
    const deleteIndex = filteredBreeds.indexOf(breed);
    const updatedFilter = filteredBreeds.slice();
    updatedFilter.splice(deleteIndex, 1);
    setFilteredBreeds(updatedFilter);
    setCurr(0);

    setMessage('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Filter By Breed</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex pt={4} pb={10} gap={5}>
            <Icon as={BiSolidDog} boxSize={6} />
            <Flex direction="column" gap={2}>
              <Heading textTransform="uppercase" size="sm">
                Breeds
              </Heading>
              <Text>Search For Your Favorite Breeds</Text>
            </Flex>
          </Flex>
          <Flex>
            <Input
              value={inputBreed}
              onChange={(e) => setInputBreed(e.target.value)}
            />
            <Button colorScheme="yellow" ml={3} onClick={addBreed}>
              Add
            </Button>
          </Flex>
          <Text size="xs" color="red" p={2}>
            {message}
          </Text>
          <Wrap px={2} pt={5}>
            {filteredBreeds.map((breed, i) => (
              <WrapItem key={`filtered-${i}`}>
                <Button
                  variant="outline"
                  colorScheme="pink"
                  onClick={(e) => deleteBreed(e, breed)}
                  rightIcon={<MdCancel />}
                >
                  {breed}
                </Button>
              </WrapItem>
            ))}
          </Wrap>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BreedModal;
