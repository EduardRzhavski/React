import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyReview';

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
    setFormSubmitted(true);
  };

  const handleEditForm = () => {
    setFormSubmitted(false);
  };

  return (
    <div>
      <SurveyForm onSubmit={handleFormSubmit} />

      {formSubmitted && <SurveyReview formData={formData} onEdit={handleEditForm} />}
    </div>
  );
};

export default App
