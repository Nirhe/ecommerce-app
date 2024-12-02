import React from "react";

function Cart({ cart }) {
  return (
    <div className="cart">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;