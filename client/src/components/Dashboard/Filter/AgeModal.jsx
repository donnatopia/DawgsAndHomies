import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Tooltip,
  Flex,
  Text,
  ModalFooter,
  Icon,
  Heading,
} from '@chakra-ui/react';
import { TbChartBubbleFilled } from 'react-icons/tb';
import { useFilter } from '../../../contexts/FilterContext.jsx';

const AgeModal = ({ isOpen, onClose }) => {
  const { minAge, setMinAge, maxAge, setMaxAge, setCurr } = useFilter();

  const handleChange = (values) => {
    setMinAge(values[0]);
    setMaxAge(values[1]);
    setCurr(0);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select an Age Range</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex pt={4} pb={10} gap={5}>
            <Icon as={TbChartBubbleFilled} boxSize={6} />
            <Flex direction="column" gap={2}>
              <Heading textTransform="uppercase" size="sm">
                Age Range
              </Heading>
              {minAge === maxAge ? (
                <Text>
                  <Text as="b">{minAge}</Text> years old
                </Text>
              ) : (
                <Text>
                  Show Dogs Who Are <Text as="b">{minAge}</Text> to{' '}
                  <Text as="b">{maxAge}</Text> years old
                </Text>
              )}
            </Flex>
          </Flex>
          <RangeSlider
            aria-label={['minAge', 'maxAge']}
            defaultValue={[minAge, maxAge]}
            max={20}
            onChange={handleChange}
            colorScheme="pink"
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <Tooltip label={minAge} placement="top" hasArrow>
              <RangeSliderThumb index={0} />
            </Tooltip>
            <Tooltip label={maxAge} placement="top" hasArrow>
              <RangeSliderThumb index={1} />
            </Tooltip>
          </RangeSlider>
          <Flex justify="space-between" mt={2}>
            <Text>0</Text>
            <Text>5</Text>
            <Text>10</Text>
            <Text>15</Text>
            <Text>20</Text>
          </Flex>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default AgeModal;
