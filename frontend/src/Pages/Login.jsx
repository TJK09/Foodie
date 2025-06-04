import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/pages/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/;

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!usernameRegex.test(username)) {
      setError('Please enter a valid username (3-30 chars, letters/numbers/underscores)');
      return;
    }

    setError('');

    try {
      const response = await fetch('http://localhost:8000/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Customize error messages for unverified email
        if (
          data.detail && 
          (data.detail.toLowerCase().includes('inactive') || data.detail.toLowerCase().includes('verify'))
        ) {
          setError('Your email is not verified yet. Please check your email to verify your account.');
        } else {
          setError(data.detail || 'Login failed. Please check your credentials.');
        }
      } else {
        // Successful login
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        localStorage.setItem('username', username);

        alert('Login successful!');
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="login-page">
      <Navbar />
      <div className="login-container">
        <h2 className="login-title">Login to Foodie</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-success w-100">Login</button>
        </form>
        <div className="login-links d-flex justify-content-between mt-3">
          <Link to='/forgot-password' className="small">Forgot Password?</Link>
          <Link to='/signup' className='small'>Register</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
