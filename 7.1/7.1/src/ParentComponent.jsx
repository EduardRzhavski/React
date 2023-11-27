import React, { useState } from 'react';
import CustomButton from './CustomButton';

const ParentComponent = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = ["blue", "red", "yellow"];

  const handleButtonClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <p>Selected Color: {selectedColor}</p>

      {colors.map((color, index) => (
        <CustomButton key={index} color={color} onClick={handleButtonClick} />
      ))}
    </div>
  );
};

export default ParentComponent;
