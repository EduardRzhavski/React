import React, { useState } from 'react';

const CheckboxComponent = () => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false, 
    checkbox3: true, 
    checkbox4: true,
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  return (
    <div>
      <div style={{ textAlign: 'left' }}>
        <label style={{ display: 'block' }}>
          <input
            type="checkbox"
            checked={checkboxes.checkbox1}
            onChange={() => handleCheckboxChange('checkbox1')}
          />
          I read the term of the app
        </label>

        <label style={{ display: 'block' }}>
          <input
            type="checkbox"
            checked={checkboxes.checkbox2}
            onChange={() => handleCheckboxChange('checkbox2')}
          />
          I accept the term of the app
        </label>

        <label style={{ display: 'block' }}>
          <input
            type="checkbox"
            checked={checkboxes.checkbox3}
            onChange={() => handleCheckboxChange('checkbox3')}
          />
          I want to get the weekly news letter
        </label>

        <label style={{ display: 'block' }}>
          <input
            type="checkbox"
            checked={checkboxes.checkbox4}
            onChange={() => handleCheckboxChange('checkbox4')}
          />
I want to get sales and offers        </label>
      </div>
    </div>
  );
};

export default CheckboxComponent;
