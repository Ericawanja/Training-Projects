import React, { useState, useEffect } from "react";
import useCounter from "./UseCounter";

function Icrement() {
  let data = useCounter(1)
  return <div>{data}</div>;
}

export default Icrement;
