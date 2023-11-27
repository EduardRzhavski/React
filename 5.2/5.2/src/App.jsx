import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../src/Cards';


const App = () => {
  return (
    <div>
      <Card
        imageSrc="https://hips.hearstapps.com/hmg-prod/images/gub-1608133278.jpg"
        title="Fast Car 1"
        description="FAST"
        link="https://www.example.com/kitten"
      />

      <Card
        imageSrc="https://img.mensxp.com/media/content/2017/Oct/most-expensive-fast-cars-ferraris-and-aston-martins1400-1507530493.jpg?w=820&h=540&cc=1"
        title="Fast car 2"
        description="FAST FAST"
        link="https://www.example.com/another-kitten"
      />

      <Card
        imageSrc="https://www.motortrend.com/uploads/2022/08/2022-Bugatti-Chiron-Super-Sport-2-1.jpg"
        title="Fast car 3"
        description="FAST FAST FAST"
        link="https://www.example.com/third-kitten"
      />
    </div>
  );
};

export default App
