import React, { useState, useEffect } from 'react';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter countries..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <ul>
        {filteredCountries.map((country) => (
          <li key={country.alpha3Code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
