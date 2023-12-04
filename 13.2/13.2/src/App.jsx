import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const SlidingBox = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const slideTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(slideTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  const boxStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: 'green',
    transition: 'transform 0.5s ease-in-out, visibility 0.5s ease-in-out',
    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
    visibility: isVisible ? 'visible' : 'hidden',
    position: 'absolute',
  };

  return (
    <div style={boxStyle}>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <SlidingBox />
    </div>
  );
};

export default App;