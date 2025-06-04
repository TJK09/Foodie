import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/Navbar.css';
import Logo from '../assets/logo.png';

function Navbar() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('access_token');
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Brand - Left */}
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" />FOODIE
        </Link>

        {/* Centered Nav Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-success" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-success" to="/cuisines">Cuisines</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-success" to="/Recipe">Recipes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-success" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-success" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-success" to="/Blog">Blogs</Link>
            </li>
          </ul>
        </div>

        {/* Right side: Login or Username + Logout */}
        <div className="d-none d-lg-flex align-items-center gap-2">
          {accessToken ? (
            <>
              <span className="text-warning me-3 navbar-user">Hello, {username}</span>
              <button onClick={handleLogout} className="btn btn-outline-danger btn-sm btn-logout">Logout</button>
            </>
          ) : (
            <Link to="/login" className="btn btn-outline-warning">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
