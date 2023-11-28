import React, { useState } from 'react';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    textInput1: '',
    textInput2: '',
    selectInput: '',
    textAreaInput: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="textInput1">First Name:</label>
        <input
          type="text"
          id="textInput1"
          name="textInput1"
          value={formData.textInput1}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="textInput2">Last Name</label>
        <input
          type="text"
          id="textInput2"
          name="textInput2"
          value={formData.textInput2}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="selectInput">Age:</label>
        <select
          id="selectInput"
          name="selectInput"
          value={formData.selectInput}
          onChange={handleInputChange}
        >
          <option value="">Select an option</option>
          <option value="option1">0-15</option>
          <option value="option2">15-50</option>
          <option value="option3">50-120</option>
        </select>
      </div>

      <div>
        <label htmlFor="textAreaInput">Free Text</label>
        <textarea
          id="textAreaInput"
          name="textAreaInput"
          value={formData.textAreaInput}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <button type="submit">Continue</button>
    </form>
  );
};



export default SurveyForm;
