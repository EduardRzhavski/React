import { useState } from 'react'
import React, { useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ImageToggle = () => {
  const colorImageRef = useRef(null);
  const bwImageRef = useRef(null);

  const handleMouseOver = () => {
    colorImageRef.current.style.display = 'block';
    bwImageRef.current.style.display = 'none';
  };

  const handleMouseOut = () => {
    colorImageRef.current.style.display = 'none';
    bwImageRef.current.style.display = 'block';
  };

  return (
    <div>
      <img
        ref={colorImageRef}
        src="./src/creating-good-black-white-12.jpg"
        alt="Color Image"
        style={{ display: 'none' }}
      />
      <img
        ref={bwImageRef}
        src="./src/creating-good-black-white-11.jpg"
        alt="Black and White Image"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Image Toggle</h1>
      <ImageToggle />
    </div>
  );
};

export default App
