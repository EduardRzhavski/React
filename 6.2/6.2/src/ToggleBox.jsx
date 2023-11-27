import React, { useState } from 'react';

const ToggleBox = () => {
  const [isBoxVisible, setBoxVisibility] = useState(true);

  const handleToggleBox = () => {
    setBoxVisibility(!isBoxVisible);
  };

  return (
    <div>
      <button onClick={handleToggleBox}>show/hide</button>

      {isBoxVisible && <div style={{ width: '100px', height: '100px', background: 'lightblue', marginTop: '10px' }}></div>}
    </div>
  );
};

export default ToggleBox;
