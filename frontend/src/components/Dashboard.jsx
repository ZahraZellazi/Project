import React, { useState } from 'react';
import Card from './Card';
import AddProjectModal from './AddProjectModal';
import './Dashboard.css'; 
import { FaPlus } from 'react-icons/fa';
import axios from 'axios'; 

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = async (newCard) => {
    try {
      const response = await axios.post('http://localhost:7777/items', newCard);
      setCards([...cards, response.data]); 
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} url={card.url} path={card.path} />
        ))}
      </div>
      <button className="add-project-button" onClick={() => setIsModalOpen(true)}>
        <FaPlus size={20} />
      </button>
      <AddProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAdd} />
    </div>
  );
};

export default Dashboard;
