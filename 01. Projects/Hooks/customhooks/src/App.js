import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Icrement from "./Icrement";
import Decrement from "./Decrement";

function App() {
  let [counter, setCounter] = useState(0);
  let [status, setStatus] = useState('add')
  let [increment, setIncrement] =useState(true)
  let [decrement, setDecrement] = useState(false)
  
const handleDecreBtn=()=>{
  setIncrement(false)
  setDecrement(true)

}
const handleIncreBtn=()=>{
  setIncrement(true)
  setDecrement(false)

}
  

  return (
    <div className="App">
      <div>
        {counter}
        {increment && <Icrement setCounter={setCounter}/>}
        {decrement && <Decrement setCounter={setCounter}/>}
      </div>
      <div className="counters">
        
      
      <button onClick={handleIncreBtn}>Start incrementing</button>
      <button onClick={handleDecreBtn}>Start decrementing</button>
      </div>
    </div>
  );
}

export default App;
