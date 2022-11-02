import { useState, useEffect } from "react";

const useCounter = (value) => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (value >= 1) {
        setCount((prev) => prev + 1);
      } else {
        setCount((prev) => prev - 1);
      }
    }, 1000);
  });
  return count;
};
export default useCounter;
