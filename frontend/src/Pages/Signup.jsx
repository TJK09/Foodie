import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/pages/login.css';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = form;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s'-]{2,}$/;

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      setSuccessMessage('');
      return;
    }

    if (!nameRegex.test(name)) {
      setError('Please enter a valid name');
      setSuccessMessage('');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email');
      setSuccessMessage('');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setSuccessMessage('');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/user/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: name,
          email,
          password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Signup failed');
        setSuccessMessage('');
      } else {
        setSuccessMessage('Signup successful! Please check your email to verify your account before logging in.');
        setError('');
        // Optionally clear form here
        setForm({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('Something went wrong. Please try again later.');
      setSuccessMessage('');
    }

    setLoading(false);
  };

  return (
    <div className="login-page">
      <Navbar />
      <div className="login-container">
        <h2 className="login-title">Create Your Foodie Account</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              required
              autoFocus
              disabled={loading}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="youremail@example.com"
              value={form.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="password"
              value={form.password}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirm password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <button className="btn btn-warning w-100" type="submit" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
        <div className="login-links mt-3">
          <Link to='/login' className="small">Already have an account? Login</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
