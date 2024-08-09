import React, { useState, useEffect } from 'react';
import Card from './Card';
import AddProjectModal from './AddProjectModal';
import './Dashboard.css'; 
import { FaPlus } from 'react-icons/fa';

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('http://localhost:7777/items');
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchCards();
  }, []);

  const handleAdd = async (newCard) => {
    try {
      const formData = new FormData();
      formData.append('image', newCard.image); 
      formData.append('url', newCard.url);
      formData.append('path', newCard.path);

      const response = await fetch('http://localhost:7777/items', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setCards([...cards, data]);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card key={index} image={`http://localhost:7777/uploads/${card.image}`} name={card.path} />
        ))}
      </div>
      <button className="add-project-button" onClick={() => setIsModalOpen(true)}>
        <FaPlus size={20} />
        New project
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
