// src/components/Card.js
import React from 'react';
import './Card.css'; // Add styles for the card

const Card = ({ image, name, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
      </div>
    </div>
  );
};

export default Card;
