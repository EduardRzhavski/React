import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const newBoxes = [
      { id: 1, size: 'small' },
      { id: 2, size: 'medium' },
      { id: 3, size: 'large' },
    ];

    setBoxes(newBoxes);

    const timeout = setTimeout(() => {
      setBoxes([]);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app">
      {boxes.map((box) => (
        <div key={box.id} className={`box ${box.size} visible`} />
      ))}
    </div>
  );
};

export default App;
