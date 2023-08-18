import React, { useState } from 'react';
import axios from 'axios';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('https://fakestoreapi.com/users', {
        email,
        password,
      });
      console.log('Signup success:', response.data);
    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message);
      setErrorMessage('Error signing up');
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
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
      <button onClick={handleSignup}>Sign Up</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default SignupPage;
