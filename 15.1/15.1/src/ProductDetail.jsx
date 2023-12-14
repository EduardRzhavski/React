import React from 'react';
import { Link, useParams } from 'react-router-dom';
import storeData from './store';

const ProductDetail = () => {
  const { id } = useParams();
  const product = storeData.find((p) => p.id === Number(id));

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Size: {product.size}</p>
      <Link to="/products">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
