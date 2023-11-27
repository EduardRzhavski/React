import React, { useState } from 'react';

const CounterWithColorLabel = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter > -10) {
      setCounter(counter - 1);
    }
  };

  const labelColor = counter < 0 ? 'red' : counter > 0 ? 'green' : 'black';

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>

      <button onClick={handleDecrement}>Decrement</button>

      <p style={{ color: labelColor }}>Current Value: {counter}</p>
    </div>
  );
};

export default CounterWithColorLabel;
