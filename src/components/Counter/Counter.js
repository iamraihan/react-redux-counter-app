import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { DecreaseCounter, IncreaseCounter, Reset } from "../Action/Action";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(IncreaseCounter());
  };
  const deCrementHandler = () => {
    dispatch(DecreaseCounter());
  };
  const resetHandler = () => {
    dispatch(Reset());
  };
  return (
    <div>
      <h2>Counter App</h2>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={resetHandler}>Reset</button>
      <button onClick={deCrementHandler}>Decrement</button>
    </div>
  );
};

export default Counter;
