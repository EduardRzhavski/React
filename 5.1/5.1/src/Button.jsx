import React from 'react';

const Button = ({ text, isImportant }) => {
  const buttonStyle = {
    fontWeight: isImportant ? 'bold' : 'normal',
  };

  return (
    <button style={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;
