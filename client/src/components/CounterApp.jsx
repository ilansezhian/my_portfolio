// File: components/CounterApp.js
import React, { useState } from "react";
import "./CounterApp.css";
import { FaPlus, FaMinus, FaSync } from "react-icons/fa";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-app">
      <h2>🔢 Counter App</h2>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button onClick={() => setCount(count + 1)} title="Increase">
          <FaPlus />
        </button>
        <button onClick={() => setCount(count - 1)} title="Decrease">
          <FaMinus />
        </button>
        <button onClick={() => setCount(0)} title="Reset">
          <FaSync />
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
