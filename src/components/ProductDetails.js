import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';

const ProductDetails = ({ match, addToCart }) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setLoading(true);
    const productId = match.params.id;
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [match.params.id]);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Existing Cart:', existingCart);
  
    const updatedCart = [...existingCart, product];
    console.log('Updated Cart:', updatedCart);
  
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    console.log('Added to cart:', product);
  };
  
  

  return (
    <div className='product-details-container'>
      {loading ? (
        <div>
          <h1>Loading.....</h1>
        </div>
      ) : product ? (
        <>
          <div className='product-image'>
            <img src={product.image} alt={product.title} />
          </div>
          <div className='product-description'>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>{`Price: $${product.price}`}</h3>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </>
      ) : (
        <h1>Product not found</h1>
      )}
    </div>
  );
};

export default ProductDetails;
