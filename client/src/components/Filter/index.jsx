import React, { useEffect, useState } from 'react';
import {
  Flex,
  Wrap,
  WrapItem,
  Input,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';
import { MdCancel } from 'react-icons/md';

const Filter = ({ allBreeds, filteredBreeds, setFilteredBreeds }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputBreed, setInputBreed] = useState('');
  const [message, setMessage] = useState('');

  const addBreed = (e) => {
    e.preventDefault();

    const currBreed = inputBreed
      .split(' ')
      .map((word) => {
        let firstLetter = word[0].toUpperCase();
        let restOfWord = word.slice(1).toLowerCase();
        return firstLetter + restOfWord;
      })
      .join(' ');

    if (filteredBreeds.length > 80) {
      setMessage('Maximum Breeds Added');
    } else if (filteredBreeds.indexOf(currBreed) !== -1) {
      setMessage(`Already Added "${currBreed}"`);
    } else if (allBreeds.has(currBreed)) {
      setFilteredBreeds([...filteredBreeds, currBreed]);
      setMessage('');
    } else {
      setMessage(`No Such Breed Named "${currBreed}"`);
    }

    setInputBreed('');
  }

  const deleteBreed = (e, breed) => {
    e.preventDefault();
    const deleteIndex = filteredBreeds.indexOf(breed);
    const updatedFilter = filteredBreeds.slice()
    updatedFilter.splice(deleteIndex, 1);
    setFilteredBreeds(updatedFilter);

    setMessage('');
  }

  return (
    <>
      <Flex py={5} align='center' justify='center' gap={3}>
        <Text>Displaying Friends from </Text>
        <Button onClick={ onOpen }>
          { filteredBreeds.length === 0 ? 120 : filteredBreeds.length } Breed{ filteredBreeds.length === 1 ? null : 's' }
        </Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Which Dog Breeds?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Input
                value={ inputBreed }
                onChange={(e) => setInputBreed(e.target.value)}
              />
              <Button colorScheme='yellow' ml={3} onClick={addBreed}>Add</Button>
            </Flex>
            <Text size='xs' color='red' p={2}>{ message }</Text>
            <Wrap px={2} pt={5}>
              { filteredBreeds.map((breed, i) => (
                <WrapItem key={`filtered-${i}`}>
                  <Button
                    varient='outline'
                    color='teal'
                    onClick={(e) => deleteBreed(e, breed) }
                    rightIcon={<MdCancel />}
                  >
                    { breed }
                  </Button>
                </WrapItem>
              ))}
            </Wrap>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Filter;