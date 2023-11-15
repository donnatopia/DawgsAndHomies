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
  Text,
  Slider,
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
  Tooltip,
} from '@chakra-ui/react';
import { BiSortAlt2 } from 'react-icons/bi';
import { MdNumbers } from 'react-icons/md';
import { useFilter } from '../../../contexts/FilterContext.jsx';

const SettingsModal = ({ isOpen, onClose }) => {
  const { sortDesc, setSortDesc, setCurr, size, setSize } = useFilter();

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

  const changeSize = (val) => {
    setCurr(0);
    setSize(val);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Display Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex py={4} gap={5}>
            <Icon as={BiSortAlt2} boxSize={6} />
            <Flex direction="column">
              <Heading textTransform="uppercase" size="sm">
                Sort Breeds From
              </Heading>
              <Flex gap={3} py={3}>
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
            </Flex>
          </Flex>
          <Flex py={4} gap={5}>
            <Icon as={MdNumbers} boxSize={6} />
            <Flex direction="column">
              <Heading textTransform="uppercase" size="sm">
                Number of Results
              </Heading>
              <Text py={3}>
                Display <Text as="b">{size}</Text> Results at a Time
              </Text>
            </Flex>
          </Flex>
          <Slider
            aria-label="numOfResultSlider"
            colorScheme="pink"
            defaultValue={size}
            min={2}
            max={100}
            onChange={changeSize}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip label={size} placement="top" hasArrow>
              <SliderThumb />
            </Tooltip>
          </Slider>
          <Flex justify="space-between">
            <Text>2</Text>
            <Text>25</Text>
            <Text>50</Text>
            <Text>75</Text>
            <Text>100</Text>
          </Flex>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;
