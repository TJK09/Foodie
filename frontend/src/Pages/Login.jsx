import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/pages/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !password) {
    setError('Please fill in all fields');
    return;
  }

  if (!emailRegex.test(email)) {
    setError('Please enter a valid email address');
    return;
  }

  setError('');
  alert(`Logging in with email: ${email}`);
};


  return (
    <div className="login-page">
      <Navbar />
      <div className="login-container">
        <h2 className="login-title">Login to Foodie</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="youremail@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
        <div className="login-links">
          <Link to='/forgot-password' className="small">Forgot Password?</Link>
          <Link to='/signup' className='small'>Register</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;


