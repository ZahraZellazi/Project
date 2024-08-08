import React from 'react';
import './AddProjectModal.css';

const AddProjectModal = ({ isOpen, onClose, onAddProject, newProjectName, setNewProjectName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add New Project</h2>
        <input 
          type="text" 
          value={newProjectName} 
          onChange={(e) => setNewProjectName(e.target.value)} 
          placeholder="Project Name" 
        />
        <button onClick={onAddProject}>Add Project</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddProjectModal;
