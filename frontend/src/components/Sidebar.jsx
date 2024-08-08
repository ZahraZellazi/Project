import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="data:image/jpeg;base64,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" alt="logo" />
        <h2>Project</h2>
      </div>
      <ul className="links">
        <h4>Main Menu</h4>
        <li>
          <span className="material-symbols-outlined">home</span>
          <a href="#">Home</a>
        </li>
        <li>
          <span className="material-symbols-outlined">folder</span>
          <a href="#">Personal Projects</a>
        </li>
      
        <hr />
        <h4>Advanced</h4>
        <li>
          <span className="material-symbols-outlined">add_circle</span>
          <a href="#">New Project</a>
        </li>
        <li>
          <span className="material-symbols-outlined">contact_support</span>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <span className="material-symbols-outlined">help</span>
          <a href="#">Help</a>
        </li>
        <hr />
        <h4>Account</h4>
        <li>
          <span className="material-symbols-outlined">account_circle</span>
          <a href="#">Profile</a>
        </li>
        <li>
          <span className="material-symbols-outlined">email</span>
          <a href="#">Message</a>
        </li>
        <li>
          <span className="material-symbols-outlined">settings</span>
          <a href="#">Settings</a>
        </li>
        <li className="logout-link">
          <span className="material-symbols-outlined">logout</span>
          <a href="#">Logout</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
