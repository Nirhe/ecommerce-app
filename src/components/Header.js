import React from "react";
import { Link } from "react-router-dom";

function Header({ cartCount }) {
  return (
    <header>
      <h1>E-Commerce App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/checkout">Cart ({cartCount})</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;