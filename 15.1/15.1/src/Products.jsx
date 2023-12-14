import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import storeData from './store';

const Products = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {storeData.map((product) => (
          <li key={product.id}>
            <span onClick={() => handleProductClick(product.id)}>
              {product.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
