import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ColorChangingBox = () => {
  const [currentColor, setCurrentColor] = useState('blue');

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const randomColor = getRandomColor();
      setCurrentColor(randomColor);
    }, 500);

    return () => clearInterval(colorInterval);
  }, []);

  const boxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: currentColor,
    transition: 'background-color 0.5s ease-in-out',
  };

  return <div style={boxStyle}></div>;
};

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 10000).toString(16);
};

const App = () => {
  return (
    <div>
      <ColorChangingBox />
    </div>
  );
};

export default App;