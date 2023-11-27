import React from 'react';

const Card = ({ imageSrc, title, description, link }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px' }}>
      <img src={imageSrc} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Learn more</a>
    </div>
  );
};

export default Card;
