import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <div className="navbar-logo-container">
          <img 
            src="https://www.github.com/images/modules/logos_page/GitHub-Mark.png" 
            alt="logo" 
            className="navbar-logo-img" 
          />
          <h3 className="navbar-logo-text">PHUB</h3>
        </div>
      </Link>
      <div className="navbar-links">
        <Link to="/create" className="navbar-link">
          <p>Create a Repository</p>
        </Link>
        <Link to="/profile" className="navbar-link">
          Profile
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
