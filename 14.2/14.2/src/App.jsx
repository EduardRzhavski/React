import React, { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';
import AvatarsList from './AvatarsList';

const App = () => {
  const [avatars, setAvatars] = useState([]);
  const [filterTerm, setFilterTerm] = useState('');

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => setAvatars(data.results))
      .catch((error) => console.error('Error fetching avatars:', error));
  }, []);

  const handleFilterChange = (term) => {
    setFilterTerm(term);
  };

  const handleFilterClick = () => {
  };

  return (
    <div>
      <Input onChange={handleFilterChange} />
      <Button onClick={handleFilterClick} />
      <AvatarsList avatars={avatars} filterTerm={filterTerm} />
    </div>
  );
};

export default App;
