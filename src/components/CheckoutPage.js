import React from 'react';

const CheckoutPage = ({ cartItems, total }) => {
  const handlePlaceOrder = () => {
    console.log('Order Placed!');
    console.log('Shipping Information:');
    console.log('TODO: Implement shipping information form handling');
    console.log('Payment Information:');
    console.log('TODO: Implement payment information form handling');
    console.log('Order Summary:');
    console.log('TODO: Implement order summary handling');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - Quantity: {item.quantity} - Total: ${(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
        <div className="total-price">Total Price: ${total}</div>
      </div>
      <div className="shipping-info">
        <h3>Shipping Information</h3>
      </div>
      <div className="payment-info">
        <h3>Payment Information</h3>
      </div>
      <button className="place-order-button" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
