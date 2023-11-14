import React from 'react';
import { Flex, Box, Icon, Text } from '@chakra-ui/react';

const FilterOption = ({ icon, text, onClick }) => (
  <>
    <Box onClick={onClick} _hover={{ cursor: 'pointer' }}>
      <Flex direction="column" align="center" p={4}>
        <Icon as={icon} boxSize={8} />
        <Text as="b" pt={3}>
          {text}
        </Text>
      </Flex>
    </Box>
    <Text fontSize="1.75em">|</Text>
  </>
);

export default FilterOption;
