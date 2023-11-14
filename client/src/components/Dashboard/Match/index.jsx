import React, { useState } from 'react';
import axios from 'axios';
import {
  Flex,
  Button,
  Text,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { GoHeartFill } from 'react-icons/go';
import { FaFaceSadCry } from 'react-icons/fa6';
import { useAuth } from '../../../contexts/AuthContext.jsx';
import { useMatch } from '../../../contexts/MatchContext.jsx';
import Card from '../Card/index.jsx';

const Match = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuth();
  const { matchedDogs } = useMatch();
  const [matchedDog, setMatchedDog] = useState({});

  const requestMatch = () => {
    onOpen();
    if (Object.keys(matchedDogs).length !== 0) {
      axios({
        method: 'post',
        withCredentials: true,
        url: 'https://frontend-take-home-service.fetch.com/dogs/match',
        data: Object.keys(matchedDogs),
      })
        .then(({ data }) =>
          axios({
            method: 'post',
            withCredentials: true,
            url: 'https://frontend-take-home-service.fetch.com/dogs',
            data: [data.match],
          }),
        )
        .then(({ data }) => setMatchedDog(data[0]))
        .catch((err) => {
          console.log('Error matching dogs', err);
        });
    }
  };

  const ErrorMatch = () => (
    <Flex direction="column" gap={6} align="center">
      <Text align="center" as="b" fontSize="lg">
        No Matches Found
      </Text>
      <Icon as={FaFaceSadCry} boxSize={8} />
      <Text>Start Liking Dogs to Generate a Match</Text>
    </Flex>
  );

  const SuccessMatch = () => (
    <Flex direction="column" gap={6} align="center">
      <Flex direction="column" gap={1} align="center">
        <Text textTransform="uppercase" align="center" as="b" fontSize="lg">
          {user}
        </Text>
        <Text> is matched with... </Text>
      </Flex>
      <Card dog={matchedDog} likeDisabled={true} />
    </Flex>
  );

  return (
    <>
      <Flex justify="center" pb={7}>
        <Button
          colorScheme="yellow"
          rightIcon={<GoHeartFill />}
          onClick={requestMatch}
        >
          Match Me
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Match Me!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {Object.keys(matchedDogs).length === 0 ? (
              <ErrorMatch />
            ) : (
              <SuccessMatch />
            )}
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Match;
