import React from 'react';
import { useTheme } from './ThemeContext';
import './TopMenu.css'; // Import the styles for TopMenu

const TopMenu = () => {
  const { toggleTheme, isNightMode } = useTheme();

  return (
    <div className={`top-menu ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <h1>Top Menu</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default TopMenu;
