import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { setUserName, setUserEmail } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserName(name);
    setUserEmail(email);

    setName('');
    setEmail('');

    navigate('/search');
  }

  return (
    <form>
      <h1>Login Page</h1>
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
      <button type="submit" onClick={ handleSubmit }>Submit</button>
    </form>
  )
}

export default Login;