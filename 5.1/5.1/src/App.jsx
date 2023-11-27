import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '../src/Button';

function App() {
    return (
      <div>
        <Button text="Important" isImportant={true} />
  
        <Button text="Not Important" isImportant={false} />
      </div>
    );
  
}

export default App
