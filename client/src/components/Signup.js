import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Importing the CSS file
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async() => {
    // Basic validation
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Clear error message
    setError('');
    try {
      const response = await axios.post('fruits-ai-backend.vercel.app/api/login/register', {
        email,
        password,
      });

      if (response.data.success) {
        alert('Signup successful! Please log in.');
        navigate('/login'); // Redirect to login after successful signup
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred. Please try again.');
    }
    // Perform signup logic (e.g., send signup data to the backend)
    // Assuming signup is successful, navigate to login or home page
    // console.log('Signup successful');
    // navigate('/home');
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>

      {error && <div className="error-message">{error}</div>}

      <div className="input-group">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-group">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group" >
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="input-group">
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button onClick={handleSignup} className="signup-button">
        Sign Up
      </button>

      <p className="login-option">
        Already have an account? <a href="/login">Log in here</a>
      </p>
    </div>
  );
};

export default Signup;
