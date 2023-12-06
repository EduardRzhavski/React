import React from 'react';
import { useTheme } from './ThemeContext';
import './Page.css';

const Page2 = () => {
  const { isNightMode } = useTheme();

  return (
    <div className={`page ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <h2>Page 2</h2>
      <p>This is the content of Page 2.</p>
    </div>
  );
};

export default Page2;