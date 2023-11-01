import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { Container, Heading, FormLabel, FormControl, Input, Button} from '@chakra-ui/react';

const Login = () => {
  const navigate = useNavigate();
  const { login, user } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    login(name, email)
      .then(() => {
        console.log('Success Logging In', user)
        navigate('/search');
      })
      .catch((err) => {
        console.log('Error Logging In', err);
      })
  }

  return (
    <Container>
      <Heading py={5}>Fetch Log In</Heading>
      <FormControl>
        <FormControl name='name' pb={5}>
          <FormLabel>Name</FormLabel>
          <Input type='text' value={ name } onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl name='email' pb={5}>
          <FormLabel>Email</FormLabel>
          <Input type='email' value={ email } onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <Button type='submit' onClick={ handleLogin }>Log In</Button>
      </FormControl>
    </Container>
  )
}

export default Login;