import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/pages/login.css'; // Reusing the same CSS for styling consistency

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, password, confirmPassword } = form;

  // Simple regex to check email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Simple regex for name: letters (a-z, A-Z), spaces, apostrophes and hyphens allowed
  const nameRegex = /^[a-zA-Z\s'-]{2,}$/;

  if (!name || !email || !password || !confirmPassword) {
    setError('Please fill in all fields');
    return;
  }

  if (!nameRegex.test(name)) {
    setError('Please enter a valid name (only letters, spaces, apostrophes, and hyphens allowed)');
    return;
  }

  if (!emailRegex.test(email)) {
    setError('Please enter a valid email address');
    return;
  }

  if (password !== confirmPassword) {
    setError('Passwords do not match');
    return;
  }

  setError('');
  alert(`Signing up with email: ${email}`);
};


  return (
    <div className="login-page">
      <Navbar />
      <div className="login-container">
        <h2 className="login-title">Create Your Foodie Account</h2>
        {error && <div className="alert alert-danger">{error}</div>}
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
            />
          </div>
          <button className="btn btn-warning w-100">Sign Up</button>
        </form>
        <div className="login-links">
          <Link to='/login' className="small">Already have an account? Login</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
