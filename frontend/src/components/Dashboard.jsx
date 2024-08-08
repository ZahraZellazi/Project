import React, { useState } from 'react';
import './Dashboard.css';
import AddProjectModal from './AddProjectModal';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');

  const handleAddProject = () => {
    setProjects([...projects, { name: newProjectName }]);
    setNewProjectName('');
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="cards">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h2>{project.name}</h2>
            <p>Code source for {project.name}</p>
          </div>
        ))}
        <button className="add-button" onClick={() => setIsModalOpen(true)}>
          + Add Project
        </button>
      </div>

      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProject={handleAddProject}
        newProjectName={newProjectName}
        setNewProjectName={setNewProjectName}
      />
    </div>
  );
};

export default Dashboard;
