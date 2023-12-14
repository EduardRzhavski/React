import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Products from './Products';
import ProductDetail from './ProductDetail';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  );
};

export default App;
