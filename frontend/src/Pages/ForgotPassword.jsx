import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/pages/login.css'; // Reusing same styles

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if(!emailRegex.test(email)){
      setError('Invalid email address');
      return;
    }

    setError('');
    setSubmitted(true);
    alert(`Password reset link sent to: ${email}`);
    // Send email to backend here
  };

  return (
    <div className="login-page">
      <Navbar />
      <div className="login-container">
        <h2 className="login-title">Forgot Password</h2>

        {submitted ? (
          <div className="alert alert-success">
            A password reset link has been sent to your email address.
          </div>
        ) : (
          <>
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
