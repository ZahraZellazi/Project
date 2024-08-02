import React from 'react';

const NavItem = ({ icon, label, notificationCount }) => (
  <li className="nav-item">
    <span className="icon">{icon}</span>
    <span className="label">{label}</span>
    {notificationCount && <span className="notification">{notificationCount}</span>}
  </li>
);

export default NavItem;
