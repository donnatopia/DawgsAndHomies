import React, { useEffect } from 'react';
import {
  Flex,
  Wrap,
  WrapItem,
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

const Filter = ({ allBreeds, setAllBreeds, filteredBreeds }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleBreed = (e, breed) => {
    e.preventDefault();
    setAllBreeds({...allBreeds, [breed]: !allBreeds[breed]});
  }

  return (
    <>
      <Flex py={5} align='center' justify='center' gap={3}>
        <Text>Displaying Friends from </Text>
        <Button onClick={ onOpen }>{ filteredBreeds.length } Breeds</Button>
        <Text> and </Text>
        <Button>All Ages</Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Which Dog Breeds?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Wrap>
              { Object.keys(allBreeds).map((breed, i) => (
                <WrapItem key={`breed-${i}`}>
                  <Button colorScheme={ allBreeds[breed] === true ? 'blue' : 'gray'} onClick={(e) => toggleBreed(e, breed)}>
                    { breed }
                  </Button>
                </WrapItem>
              ))}
            </Wrap>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='yellow' mr={3} onClick={onClose}>
              Filter
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Filter;