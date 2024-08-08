// src/components/Dashboard.js
import React, { useState } from 'react';
import Card from './Card';
import AddProjectModal from './AddProjectModal'; // Make sure this matches the correct import path
import './Dashboard.css'; 
import { FaPlus } from 'react-icons/fa';

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = (newCard) => {
    setCards([...cards, newCard]);
    setIsModalOpen(false); // Close modal after adding
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
      {isModalOpen && (
        <AddProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAdd}
        />
      )}
    </div>
  );
};

export default Dashboard;
