
import React from 'react';
import './Card.css';
const Card = ({ image, url, path, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={path} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{path}</h3>
        <a href={url} className="card-url" target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </div>
    </div>
  );
};

export default Card;
