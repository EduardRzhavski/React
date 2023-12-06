import React from 'react';
import { ThemeProvider } from './ThemeContext';
import TopMenu from './TopMenu';
import Page1 from './Page1';
import Page2 from './Page2';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <TopMenu />
        <Page1 />
        <Page2 />
      </div>
    </ThemeProvider>
  );
}

export default App;