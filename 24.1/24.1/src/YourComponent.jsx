// YourComponent.js
import React from 'react';
import useCounter from './useCounter';

const YourComponent = () => {
  const counter = useCounter(0);

  return (
    <div>
      <p>Counter Value: {counter.value}</p>
      <button onClick={counter.addOne}>Add One</button>
      <button onClick={counter.removeOne}>Remove One</button>
      <button onClick={counter.double}>Double</button>
      <button onClick={counter.divide}>Divide</button>
    </div>
  );
};

export default YourComponent;
