import React from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

const Header = () => {
  return (
    <header className="Header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <FaSearch className="search-icon" />
      </div>
      <div className="auth-buttons">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
