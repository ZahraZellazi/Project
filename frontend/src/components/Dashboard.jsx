// src/components/Dashboard.js
import React, { useState } from 'react';
import Card from './Card';
import AddModal from './AddProjectModal';
import './Dashboard.css'; // Add styles for the dashboard
import { FaPlus } from 'react-icons/fa';
const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = (newCard) => {
    setCards([...cards, newCard]);
  };

  return (
    <div className="dashboard">
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} name={card.name} />
        ))}
      </div>
      <button className="add-project-button" onClick={() => setIsModalOpen(true)}>
      <FaPlus size={20} />
      </button>
      <AddModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAdd} />
    </div>
  );
};

export default Dashboard;
