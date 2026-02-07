import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme on first render
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
  }, []);

  // Save theme whenever changed
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    // Apply to entire body
    document.body.className = darkMode ? "dark-mode" : "light-mode";

  }, [darkMode]);

  return (
    <div className="page-wrapper">

      {/* Toggle Switch */}
      <label className="switch">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider"></span>
      </label>

      <div className="counter-box">
        <h2>Current Count</h2>
        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}>Increment(+)</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: 30 }}>Decrement(-)</button>
      </div>
    </div>
  );
};

export default Counter;
