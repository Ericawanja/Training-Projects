import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Icrement from "./Icrement";
import Decrement from "./Decrement";

function App() {
  return (
    <div className="App">
      <Decrement />
      <Icrement />
    </div>
  );
}

export default App;
