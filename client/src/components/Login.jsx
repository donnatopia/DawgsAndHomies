import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import {
  Text,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
} from '@chakra-ui/react';
import MainLayout from '../layouts/Main/OneTab.jsx';

const Login = () => {
  const navigate = useNavigate();
  const { login, user } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    login(name, email)
      .then(() => {
        console.log('Success Logging In', user);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log('Error Logging In', err);
      });
  };

  return (
    <MainLayout>
      <Text align="center" color="pink.100" fontSize={30}>
        Getting Started
      </Text>
      <FormControl>
        <FormControl name="name" pb={5}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl name="email" pb={5}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Flex justify="center">
          <Button type="submit" onClick={handleLogin} variant="primary" w="50%">
            Log In
          </Button>
        </Flex>
      </FormControl>
    </MainLayout>
  );
};

export default Login;
