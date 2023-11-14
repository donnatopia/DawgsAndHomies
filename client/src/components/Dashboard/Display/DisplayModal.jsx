import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Icon,
  Flex,
  Button,
  Heading,
} from '@chakra-ui/react';
import { BiSortAlt2 } from 'react-icons/bi';
import { useFilter } from '../../../contexts/FilterContext.jsx';

const DisplayModal = ({ isOpen, onClose }) => {
  const { sortDesc, setSortDesc, setCurr } = useFilter();

  const switchToAZ = (e) => {
    e.preventDefault();
    setCurr(0);
    setSortDesc(false);
  };

  const switchToZA = (e) => {
    e.preventDefault();
    setCurr(0);
    setSortDesc(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Display Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex py={4} gap={5} align="center">
            <Icon as={BiSortAlt2} boxSize={6} />
            <Heading textTransform="uppercase" size="sm">
              Sort Breeds From
            </Heading>
            <Button
              onClick={switchToAZ}
              colorScheme="pink"
              variant={sortDesc ? 'outline' : 'solid'}
            >
              A-Z
            </Button>
            <Button
              onClick={switchToZA}
              colorScheme="pink"
              variant={sortDesc ? 'solid' : 'outline'}
            >
              Z-A
            </Button>
          </Flex>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default DisplayModal;
