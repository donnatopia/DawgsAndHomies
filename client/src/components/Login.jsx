import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

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
    <form>
      <h1>Log In</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={ name }
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={ email }
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" onClick={ handleLogin }>Log In</button>
    </form>
  )
}

export default Login;