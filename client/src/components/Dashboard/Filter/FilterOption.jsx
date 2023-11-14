import React from 'react';
import { Flex, Box, Icon, Text } from '@chakra-ui/react';

const FilterOption = ({ icon, title, text, onClick }) => (
  <>
    <Box onClick={onClick} _hover={{ cursor: 'pointer' }}>
      <Flex direction="column" align="center" p={4}>
        <Icon as={icon} boxSize={8} />
        <Text as="b" pt={3}>
          {title}
        </Text>
        <Text>{text}</Text>
      </Flex>
    </Box>
    <Text fontSize="2em">|</Text>
  </>
);

export default FilterOption;
