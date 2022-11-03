import "./App.css";
import { useEffect, useState } from "react";
import Icrement from "./Icrement";
import Decrement from "./Decrement";

function CustomHooks() {
  return (
    <div className="App">
      <Decrement />
      <Icrement />
    </div>
  )
}

export default CustomHooks