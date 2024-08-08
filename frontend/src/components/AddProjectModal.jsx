// src/components/AddModal.js
import React, { useState } from 'react';
import './AddProjectModal.css'; // Add styles for the modal

const AddProjectModal = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleAdd = () => {
    onAdd({ name, image });
    setName('');
    setImage('');
    onClose();
  };

  return (
    isOpen ? (
      <div className="modal-overlay">
        <div className="modal">
          <h2>Add New Project</h2>
          <input
            type="text"
            placeholder="Project Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button onClick={handleAdd}>Add Project</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    ) : null
  );
};

export default AddProjectModal;
