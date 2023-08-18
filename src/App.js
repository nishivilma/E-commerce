


import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch,useHistory } from 'react-router-dom';

import Navbar from './components/Navbar';
import Products from './components/Products';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import CategoriesList from './components/CategoriesList';
import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage';
import HomePage from './components/HomePage';
import CheckoutPage from './components/CheckoutPage'; 
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

const App=() =>{
  const [categoryFilter, setCategoryFilter] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
  
    if (existingItem) {
      setCartItems(prevCartItems =>
        prevCartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems(prevCartItems => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };
  

  const updateQuantity = (itemId, newQuantity) => {
    const updatedItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };
  
  const removeItem = (itemId) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
  };
  

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };
  

  return (
    <Router>
      
      <div className="App">
     
        <Navbar />
        <CategoriesList setCategoryFilter={setCategoryFilter} />
        <Switch>
        <Route path="/" exact>
          <HomePage addToCart={addToCart} />
        </Route>
          <Route path="/products/:category">
            <ProductList categoryFilter={categoryFilter} addToCart={addToCart} />
          </Route>
          <Route path="/" exact>
            <Products categoryFilter="" addToCart={addToCart} />
          </Route>
          <Route path="/cart">
            <CartPage cartItems={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} />
          </Route>
          <Route path="/products/:id">
  <ProductDetails addToCart={addToCart} />
</Route>
          <Route path="/checkout">
            <CheckoutPage cartItems={cartItems} total={calculateTotalPrice()} />
          </Route>
        
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
        </Switch>
        <Footer />
      
      </div>
      
    </Router>
  );
}

export default App;








