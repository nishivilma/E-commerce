
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = ({ categoryFilter, addToCart }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  useEffect(() => {
    setLoading(true);
    let url = 'https://fakestoreapi.com/products';

    if (categoryFilter) {
      url = `https://fakestoreapi.com/products/category/${categoryFilter}`;
    }

    axios({
      method: 'GET',
      url: url,
    })
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [categoryFilter]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleProductClick = (productId) => {
    console.log('Clicked product ID:', productId);
  };

  return (
    <div className="products-container">
      {loading ? (
        <div>
          <h1>Loading.....</h1>
        </div>
      ) : (
        <>
          <div className="product-list">
            {currentProducts.map((Product) => (
              <div
                key={Product.id}
                className="card"
                onClick={() => handleProductClick(Product.id)}
              >
                <div>
                  <img src={Product.image} alt="#" />
                </div>
                <div className="card-description">
                  <h6>{Product.title}</h6>
                  <h6>{`Price: ${Product.price}`}</h6>
                  <h6>{`Category: ${Product.category}`}</h6>
                  {Product.available_stock > 0 ? (
                    <div>
                      <button onClick={() => addToCart(Product)}>Add to Cart</button>
                      <p>{`Available Stock: ${Product.available_stock}`}</p>
                    </div>
                  ) : (
                    <p>Out of Stock</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: Math.ceil(data.length / productsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={index + 1 === currentPage ? 'active' : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;


