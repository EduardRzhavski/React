import { useState } from 'react';

const useCounter = (initialNum) => {
  const [value, setValue] = useState(initialNum);

  const addOne = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const removeOne = () => {
    setValue((prevValue) => prevValue - 1);
  };

  const double = () => {
    setValue((prevValue) => prevValue * 2);
  };

  const divide = () => {
    setValue((prevValue) => (prevValue !== 0 ? prevValue / 2 : 0));
  };

  return {
    value,
    addOne,
    removeOne,
    double,
    divide,
  };
};

export default useCounter;
