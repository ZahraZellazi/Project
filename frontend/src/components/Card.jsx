import React from 'react';
import { FaTrash, FaEdit, FaDownload } from 'react-icons/fa';
import './Card.css'; 

const Card = ({ image, name, onClickDelete, onClickEdit, onClickDownload }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <div className="card-info">
          <h3 className="card-title">{name}</h3>
          <p className="card-description">Add description</p>
        </div>
        <div className="card-actions">
          <button onClick={onClickEdit} className="card-icon-button">
            <FaEdit />
          </button>
          <button onClick={onClickDelete} className="card-icon-button">
            <FaTrash />
          </button>
          <button onClick={onClickDownload} className="card-icon-button">
            <FaDownload />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
