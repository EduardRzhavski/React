import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from '../src/VideoPlayer';

const App = () => {
  return (
    <div>
      <h1>Simple Video Player</h1>
      <VideoPlayer />
    </div>
  );
};

export default App
