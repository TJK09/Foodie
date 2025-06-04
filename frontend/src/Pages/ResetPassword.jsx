import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/pages/login.css'; // Reuse existing styles

const ResetPassword = () => {
  const { uid, token } = useParams(); // Get from URL params
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (!password || !confirmPassword) {
    setError("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  try {
    await axios.post(`http://127.0.0.1:8000/api/user/reset-password/${uid}/${token}/`, {
      password,
    });

    setSuccess(true);
    setTimeout(() => {
      navigate("/login");
    }, 3000);

  } catch (err) {
    setError("Invalid token or something went wrong. Please try again.");
  }
};


  return (
    <>
      <Navbar />
      <div className="login-page">
        <div className="login-container">
          <h2 className="login-title">Reset Password</h2>

          {success ? (
            <div className="alert alert-success">
              Your password has been reset successfully! Redirecting to login...
            </div>
          ) : (
            <>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoFocus
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <button className="btn btn-warning w-100" type="submit">
                  Reset Password
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResetPassword;
