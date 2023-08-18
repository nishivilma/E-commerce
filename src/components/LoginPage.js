import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 
import axios from 'axios';

const LoginPage = () => {
  const history = useHistory(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://fakestoreapi.com/users/login', {
        email,
        password,
      });
      console.log('Login success:', response.data);
      history.push('/');
    
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default LoginPage;
