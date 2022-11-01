import { useEffect } from "react";

const useCounterChange = (action, setCounter) => {
  if (action === "add") {
    let interval;
    const handleIncrement = () => {
      interval = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    };
    useEffect(() => {
      handleIncrement();
      return () => {
        setCounter(0);
        clearInterval(interval);
      };
    }, []);
  }else{
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
  }
};
export default useCounterChange;