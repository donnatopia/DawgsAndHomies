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
import { IoLocationSharp } from 'react-icons/io5';
import { useFilter } from '../../../contexts/FilterContext.jsx';

const LocationModal = ({ isOpen, onClose }) => {
  const { zipCodes, setZipCodes } = useFilter();
  const [inputZip, setInputZip] = useState('');
  const [message, setMessage] = useState('');

  const addZip = (e) => {
    e.preventDefault();
    if (zipCodes.indexOf(inputZip) !== -1) {
      setMessage(`${inputZip} is already added`);
    } else if (/^\d{5}(-\d{4})?$/.test(inputZip)) {
      setZipCodes([...zipCodes, inputZip]);
      setMessage('');
    } else {
      setMessage(`${inputZip} is not a valid zip code`);
    }
    setInputZip('');
  };

  const deleteZip = (e, zipCode) => {
    e.preventDefault();
    const i = zipCodes.indexOf(zipCode);
    const updatedZipCodes = zipCodes.slice(0, i).concat(zipCodes.slice(i + 1));
    setZipCodes(updatedZipCodes);
    setMessage('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Filter By Location</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex pt={4} pb={10} gap={5}>
            <Icon as={IoLocationSharp} boxSize={6} />
            <Flex direction="column" gap={2}>
              <Heading textTransform="uppercase" size="sm">
                Locations
              </Heading>
              <Text>Search for Zip Codes</Text>
            </Flex>
          </Flex>
          <Flex>
            <Input
              value={inputZip}
              onChange={(e) => setInputZip(e.target.value)}
            />
            <Button colorScheme="yellow" ml={3} onClick={addZip}>
              Add
            </Button>
          </Flex>
          <Text size="xs" color="red" p={2}>
            {message}
          </Text>
          <Wrap px={2} pt={5}>
            {zipCodes.length > 0
              ? zipCodes.map((zipCode, i) => (
                  <WrapItem key={`zipCode-${i}`}>
                    <Button
                      variant="outline"
                      colorScheme="pink"
                      onClick={(e) => deleteZip(e, zipCode)}
                      rightIcon={<MdCancel />}
                    >
                      {zipCode}
                    </Button>
                  </WrapItem>
                ))
              : null}
          </Wrap>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default LocationModal;
