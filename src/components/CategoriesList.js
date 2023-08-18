import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import '../App.css';

const CategoriesPage = ({ setCategoryFilter }) => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
    setShowCategories(false); 
  };

  const toggleCategoriesList = () => {
    setShowCategories(!showCategories);
  };

  return (
    <div className="categories-container">
      <div className="menu-icon" onClick={toggleCategoriesList}>
        &#9776; Categories
      </div>
      {showCategories && (
        <div className="categories-list">
          <h2>Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index} onClick={() => handleCategoryClick(category)}>
                <Link to={`/products/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;












