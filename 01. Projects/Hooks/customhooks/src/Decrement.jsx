import React from "react";
import { useEffect } from "react";

function Decrement({ setCounter }) {
  let interval;
  const handleDecrement = () => {
    interval = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);
  };
  useEffect(() => {
    handleDecrement();
    return () => {
      setCounter(0);
      clearInterval(interval);
    };
  }, []);
  return <div>p</div>;
}

export default Decrement;
