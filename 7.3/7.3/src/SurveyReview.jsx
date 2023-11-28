import React from 'react';

const SurveyReview = ({ formData, onEdit }) => {
  return (
    <div>
      <h2>Review Your Form</h2>
      <p>Text Input 1: {formData.textInput1}</p>
      <p>Text Input 2: {formData.textInput2}</p>
      <p>Select Input: {formData.selectInput}</p>
      <p>Text Area Input: {formData.textAreaInput}</p>

      <button onClick={onEdit}>Edit Form</button>
    </div>
  );
};

export default SurveyReview;
