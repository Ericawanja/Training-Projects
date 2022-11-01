import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useCounterChange from "./UseCounterChange";
function Icrement({ setCounter }) {
    let action = 'add'
    useCounterChange (action, setCounter)
//   let interval;
//   const handleIncrement = () => {
//     interval = setInterval(() => {
//       setCounter((prev) => prev + 1);
//     }, 1000);
//   };
//   useEffect(() => {
//     handleIncrement();
//     return () => {
//         setCounter(0)
//       clearInterval(interval);
//     };
//   }, []);
  return <div></div>;
}

export default Icrement;
