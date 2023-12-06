import React from 'react';
import { useGiftContext } from './GiftContext';

const Father = () => {
  const { setGifts } = useGiftContext();

  const setGiftArray = () => {
    const newGifts = ['Toy Car', 'Video Game', 'Board Game'];
    setGifts(newGifts);
  };

  return (
    <div>
      <h1>Father Component</h1>
      <button onClick={setGiftArray}>Set Gifts</button>
      <Son />
    </div>
  );
};

export default Father;
