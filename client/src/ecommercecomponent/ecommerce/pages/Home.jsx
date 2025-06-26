// File: components/ecommerce/pages/Home.js
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/store";
import { Link } from "react-router-dom";
import "./ecommerce-page.css";

const products = [
  { id: 1, name: "T-Shirt", price: 19.99 },
  { id: 2, name: "Jeans", price: 49.99 },
  { id: 3, name: "Sneakers", price: 79.99 },
];

function Home() {
  const dispatch = useDispatch();

  return (
    <div className="ecommerce-home">
      <h2>🛒 Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h4>{product.name}</h4>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
            <Link to={`/ecommerce/product/${product.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
