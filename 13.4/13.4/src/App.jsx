import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled, { keyframes } from 'styled-components';


const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
  margin: 20px auto;
`;

const Spinner = () => {
  return <SpinnerContainer></SpinnerContainer>;
};

const App = () => {
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerActive(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {timerActive && <Spinner />}

    </div>
  );
};

export default App;