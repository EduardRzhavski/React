import React from 'react';
import { useGiftContext } from './GiftContext';

const Grandson = () => {
  const { gifts } = useGiftContext();

  return (
    <div>
      <h3>Grandson Component</h3>
      <p>Gifts received:</p>
      <ul>
        {gifts.map((gift, index) => (
          <li key={index}>{gift}</li>
        ))}
      </ul>
    </div>
  );
};

export default Grandson;

