


import React from 'react';
import '../App.css';

 

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
  return (
<div>
<h2>Your Cart</h2>
      {cartItems.length === 0 ? (
<p>Your cart is empty</p>
      ) : (
<div className="cart-items">
          {cartItems.map((item) => (
<div key={item.id} className="cart-item">
<img src={item.image} alt={item.title} />
<div>
<h3>{item.title}</h3>
<p>Price: ${item.price}</p>
<div className="quantity-controls">
<button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
<span>{item.quantity}</span>
<button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
</div>
<button onClick={() => removeItem(item.id)}>Remove</button>
</div>
</div>
          ))}
</div>
      )}
</div>
  );
};

 

export default Cart;








