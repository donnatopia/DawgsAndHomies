import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';

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
    <Box h="100vh" w="100vw" p={10} bg="brand.babypink" align="center">
      <Card maxW="lg">
        <CardHeader align="center">
          <Heading size="md" textTransform="uppercase">
            Welcome to Dawgs & Homies
          </Heading>
          <Image
            src="https://raw.githubusercontent.com/donnatopia/fetch/5878715dfafcf42c18309dd7abaec6369bcf159b/client/dist/logo.png"
            alt="Dawgs & Homies Logo"
            boxSize="150px"
          />
        </CardHeader>
        <CardBody>
          <FormControl>
            <FormControl name="name" pb={5}>
              <FormLabel textTransform="uppercase">Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl name="email" pb={5}>
              <FormLabel textTransform="uppercase">Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <Button type="submit" onClick={handleLogin} colorScheme="yellow">
              Log In
            </Button>
          </FormControl>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Login;
