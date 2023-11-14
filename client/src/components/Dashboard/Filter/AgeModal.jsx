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
} from '@chakra-ui/react';
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
          <RangeSlider
            aria-label={['minAge', 'maxAge']}
            defaultValue={[minAge, maxAge]}
            max={20}
            onChange={handleChange}
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
          <Flex direction="column" align="center" gap={3}>
            <Text pt={10}>Only Show Dogs Who Are</Text>
            {minAge === maxAge ? (
              <Text fontSize="2xl" as="b">
                {minAge} years old
              </Text>
            ) : (
              <Text fontSize="2xl" as="b">
                {minAge} to {maxAge} years old
              </Text>
            )}
          </Flex>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default AgeModal;
