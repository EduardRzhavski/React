import React from 'react';
import { useTheme } from './ThemeContext';
import './Page.css';

const Page1 = () => {
  const { isNightMode } = useTheme();

  return (
    <div className={`page ${isNightMode ? 'night-mode' : 'day-mode'}`}>
      <h2>Page 1</h2>
      <p>This is the content of Page 1.</p>
    </div>
  );
};

export default Page1;