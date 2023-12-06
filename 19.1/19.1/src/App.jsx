import React from 'react';
import Grandfather from './Grandfather';
import { GiftProvider } from './GiftContext';

const App = () => {
  return (
    <GiftProvider>
      <Grandfather />
    </GiftProvider>
  );
};

export default App;