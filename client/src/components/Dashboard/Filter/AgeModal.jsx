import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';

const AgeModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select an Age Range</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Body</ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default AgeModal;
