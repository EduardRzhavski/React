import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 1

const MyComponent = () => {
  const [favoriteColor, setFavoriteColor] = useState('blue');

// 2

const headingText = `My favorite color is ${favoriteColor}`;

// 3

return (
  <div id="myComponent">
    <h1>{headingText}</h1>
  </div>
);

// 4

useEffect(() => {
  const timeoutId = setTimeout(() => {
    setFavoriteColor('green');
  }, 1000);

  return () => clearTimeout(timeoutId);
}, []);

};

export default MyComponent;
