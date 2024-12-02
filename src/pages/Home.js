import React from "react";
import ProductList from "../components/ProductList";

const products = [
  { id: 1, name: "Laptop", price: 999, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Smartphone", price: 699, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 199, image: "https://via.placeholder.com/150" },
];

function Home({ addToCart }) {
  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

export default Home;