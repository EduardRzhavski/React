import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from '../components/Quiz'

function App() {
  

 
    const handleQ1InputChange = (event) => {
      console.log("Q1 Input changed:", event.target.value);
    };
  
    const handleQ2InputChange = (event) => {
      console.log("Q2 Input changed:", event.target.value);
    };
  
    return (
      <Quiz
        onQ1InputChange={handleQ1InputChange}
        onQ2InputChange={handleQ2InputChange}
      />
    );
}

export default App
