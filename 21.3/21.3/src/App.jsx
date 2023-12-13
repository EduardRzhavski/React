import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []); 

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Data Fetched:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

const App = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <button onClick={handleToggle}>{toggle ? 'Hide' : 'Show'} Component</button>
      {toggle && <DataFetchingComponent />}
    </div>
  );
};

export default App;
