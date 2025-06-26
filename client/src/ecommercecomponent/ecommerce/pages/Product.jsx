// File: components/ecommerce/pages/Product.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/store";
import "./ecommerce-page.css";

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 19.99,
    description: "Soft cotton t-shirt in various sizes.",
  },
  {
    id: 2,
    name: "Jeans",
    price: 49.99,
    description: "Classic blue denim jeans.",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 79.99,
    description: "Comfortable and stylish sneakers.",
  },
];

function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-page">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        <strong>${product.price.toFixed(2)}</strong>
      </p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <br />
      <br />
      <Link to="/ecommerce">← Back to products</Link>
    </div>
  );
}

export default Product;
