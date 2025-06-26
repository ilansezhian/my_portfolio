// File: components/ecommerce/pages/Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/store";
import { Link } from "react-router-dom";
import "./ecommerce-page.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/ecommerce">Browse products</Link>.
        </p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong> — ${item.price.toFixed(2)} ×{" "}
                {item.quantity}
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={{ marginLeft: "10px" }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h4>Total: ${total.toFixed(2)}</h4>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default Cart;
