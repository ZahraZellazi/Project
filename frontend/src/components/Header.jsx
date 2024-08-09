import React from 'react';
import './Header.css'; // Create this CSS file to style the header

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
