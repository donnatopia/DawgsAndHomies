import React from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import { Box, Flex, Icon, Text, useDisclosure } from '@chakra-ui/react';
import SettingsModal from './SettingsModal.jsx';

const Settings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box _hover={{ cursor: 'pointer' }} onClick={onOpen}>
        <Flex align="center" p={4} gap={2}>
          <Icon as={IoSettingsSharp} boxSize={6} />
          <Text as="b">Settings</Text>
        </Flex>
      </Box>
      <SettingsModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Settings;
