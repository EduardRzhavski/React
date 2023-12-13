import React from 'react';
import useDataFetch from './useDataFetch'; 

const YourComponent = () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  const { data, isLoading, error } = useDataFetch(apiUrl);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default YourComponent;
