import React from "react";
import Cart from "../components/Cart";

function Checkout({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Checkout</h1>
      <Cart cart={cart} />
      <h2>Total: ${total.toFixed(2)}</h2>
      <button>Proceed to Payment</button>
    </div>
  );
}

export default Checkout;