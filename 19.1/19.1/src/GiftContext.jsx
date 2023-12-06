import { createContext, useContext, useState } from 'react';

const GiftContext = createContext();

const GiftProvider = ({ children }) => {
  const [gifts, setGifts] = useState([]);

  return (
    <GiftContext.Provider value={{ gifts, setGifts }}>
      {children}
    </GiftContext.Provider>
  );
};

const useGiftContext = () => {
  const context = useContext(GiftContext);
  if (!context) {
    throw new Error('useGiftContext must be used within a GiftProvider');
  }
  return context;
};

export { GiftProvider, useGiftContext };
