import React, { useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <label htmlFor="exampleInput">Input:</label>
      <input id="exampleInput" ref={inputRef} type="text" />
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>App Content</h1>
      <FocusInput />
    </div>
  );
};

export default App;
