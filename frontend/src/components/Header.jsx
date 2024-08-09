import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="auth-buttons">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
