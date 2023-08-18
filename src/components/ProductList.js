import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
              <div key={Product.id} className="card">
                <div>
                  <img src={Product.image} alt="#" />
                </div>
                <div className="card-description">
                  <h6>{Product.title}</h6>
                  <h6>{`Price: ${Product.price}`}</h6>
                  <h6>{`Category: ${Product.category}`}</h6>
                  <button onClick={() => addToCart(Product)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(data.length / productsPerPage)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Products;


