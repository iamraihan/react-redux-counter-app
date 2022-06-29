import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount((count) => count + 1);
  };
  const deCrementHandler = () => {
    setCount((count) => count - 1);
  };
  return (
    <div>
      <h2>Counter App</h2>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={deCrementHandler}>Decrement</button>
    </div>
  );
};

export default Counter;
