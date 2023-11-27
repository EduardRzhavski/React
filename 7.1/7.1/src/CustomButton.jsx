import React from 'react';

const CustomButton = ({ color, onClick }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={() => onClick(color)}>
      {color}
    </button>
  );
};

export default CustomButton;
