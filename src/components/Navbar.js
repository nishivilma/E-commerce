import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <div className='navbar'>
       {/* <h1>H&M</h1> */}
       <Link to="/" className="nav-link home">Home</Link>
<Link to="/login" className="nav-link">Login</Link>
<Link to="/signup" className="nav-link">Signup</Link>

<Link to='/Cart' className="nav-link cart">
  <span className="cart-icon">&#128722;</span> Cart
  <span className="cart-count"></span> 
</Link>

    
    </div>
  );
}

export default Navbar;




