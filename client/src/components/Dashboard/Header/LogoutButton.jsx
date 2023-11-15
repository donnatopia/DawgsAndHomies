import React from 'react';
import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext.jsx';
import { TbLogout } from 'react-icons/tb';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    logout()
      .then(() => {
        console.log('Success Logging Out');
        navigate('/');
      })
      .catch((err) => {
        console.log('Error Logging Out', err);
      });
  };

  return (
    <Box _hover={{ cursor: 'pointer' }} onClick={handleLogout}>
      <Flex align="center" p={4} gap={2}>
        <Icon as={TbLogout} boxSize={6} />
        <Text as="b">Logout</Text>
      </Flex>
    </Box>
  );
};

export default LogoutButton;
