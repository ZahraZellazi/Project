import React, { useState, useEffect } from 'react';
import Card from './Card';
import AddProjectModal from './AddProjectModal';
import EditProjectModal from './EditProjectModal'; 
import './Dashboard.css'; 
import { FaPlus } from 'react-icons/fa';

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

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
      setIsAddModalOpen(false);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleEdit = async (updatedItem) => {
    try {
      const response = await fetch(`http://localhost:7777/items/${updatedItem._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });
      const data = await response.json();
      setCards(cards.map(item => (item._id === data._id ? data : item)));
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:7777/items/${id}`, {
        method: 'DELETE',
      });
      setCards(cards.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEditClick = (item) => {
    setEditData(item);
    setIsEditModalOpen(true);
  };

  return (
    <div className="dashboard">
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card._id}
            image={`http://localhost:7777/uploads/${card.image}`}
            name={card.path}
            onClickEdit={() => handleEditClick(card)}
            onClickDelete={() => handleDelete(card._id)}
            onClickDownload={() => console.log('Download logic here')} 
          />
        ))}
      </div>
      <button className="add-project-button" onClick={() => setIsAddModalOpen(true)}>
        <FaPlus size={20} />
        New project
      </button>
      {isAddModalOpen && (
        <AddProjectModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAdd}
        />
      )}
      {isEditModalOpen && (
        <EditProjectModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onEdit={handleEdit}
          initialData={editData}
        />
      )}
    </div>
  );
};

export default Dashboard;
