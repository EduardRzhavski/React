import React from 'react';

const QuizTitle = () => {
  return <h1>How do you like front-end?</h1>;
};

const Q1Title = () => {
  return <h2>How much do you love front-end?</h2>;
};

const Q1Input = ({ onChange }) => {
  return <input type="number" min="1" max="10" onChange={onChange} />;
};

const Q1 = ({ onInputChange }) => {
  return (
    <div>
      <Q1Title />
      <Q1Input onChange={onInputChange} />
    </div>
  );
};

const Q2Title = () => {
  return <h2>What is your favorite front-end topic?</h2>;
};

const Q2Input = ({ onChange }) => {
  return <input type="text" onChange={onChange} />;
};

const Q2 = ({ onInputChange }) => {
  return (
    <div>
      <Q2Title />
      <Q2Input onChange={onInputChange} />
    </div>
  );
};

const Quiz = ({ onQ1InputChange, onQ2InputChange }) => {
  return (
    <div>
      <QuizTitle />
      <Q1 onInputChange={onQ1InputChange} />
      <Q2 onInputChange={onQ2InputChange} />
    </div>
  );
};



export default Quiz;
