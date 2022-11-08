import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterStore } from "./redux/store";

function Counter() {
  let count = useSelector((state) => state.counter);
  console.log(count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default Counter;
