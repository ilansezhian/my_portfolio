// File: components/Calculator.js
import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      const result = eval(input); // Warning: eval should be replaced with a safer parser in production
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
        ].map((btn, idx) => (
          <button
            key={idx}
            onClick={() => (btn === "=" ? handleEqual() : handleClick(btn))}
            className={btn === "=" ? "equal" : ""}
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear} className="clear">
          C
        </button>
      </div>
    </div>
  );
}

export default Calculator;
