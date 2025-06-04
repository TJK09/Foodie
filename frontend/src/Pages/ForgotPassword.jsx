import React, { useState } from "react";
import axios from 'axios';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/pages/login.css'; // Reusing same styles

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username.trim()) {
      setError('Please enter your username');
      return;
    }

    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if(!emailRegex.test(email)){
      setError('Invalid email address');
      return;
    }

    setError('');

    try {
      await axios.post('http://127.0.0.1:8000/api/user/request-reset-password/', { username, email });
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <Navbar />
      <div className="login-container">
        <h2 className="login-title">Forgot Password</h2>

        {submitted ? (
          <div className="alert alert-success">
            If your username and email exist, a password reset link has been sent.
          </div>
        ) : (
          <>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoFocus
                />
              </div>
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
                />
              </div>
              <button className="btn btn-warning w-100">Send Reset Link</button>
            </form>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
