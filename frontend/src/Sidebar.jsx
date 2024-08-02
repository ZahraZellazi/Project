import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaArrowLeft, FaHome, FaBoxOpen, FaUsers, FaClipboardList, FaFire, FaDollarSign, FaFolder, FaCommentDots } from 'react-icons/fa';
import NavItem from './NavItem'; // Ensure the path is correct
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="hamburger" onClick={toggleSidebar}>
        <GiHamburgerMenu />
      </div>
      <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={toggleSidebar}>
        <FaArrowLeft />
        </div>
        <ul className='items'>
          <NavItem icon={<FaHome />} label="Dashboard" />
          <NavItem icon={<FaBoxOpen />} label="Products" />
          <NavItem icon={<FaUsers />} label="Customers" />
          <NavItem icon={<FaClipboardList />} label="Orders" />
          <NavItem icon={<FaFire />} label="Promotions" />
          <NavItem icon={<FaDollarSign />} label="Sales" />
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
