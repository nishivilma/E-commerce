import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = ({ addToCart }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products?')
      .then((response) => {
        setFeaturedProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 


  return (
    <div>
      <h2>shoppy</h2>
      <div className="featured-products">
        {featuredProducts.map((product) => (
          <div key={product.id} className="featured-product">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{`Price: $${product.price}`}</p>
            <button onClick={() => {
  console.log('Add to cart clicked:', product);
  addToCart(product);
}}>Add to Cart</button>
          </div>
        ))}
      </div>
  
     
    </div>
  );
};

export default HomePage;

