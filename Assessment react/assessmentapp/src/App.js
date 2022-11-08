import "./App.css";
import CounterRedux from "./Component/CounterRedux/counterRedux";
import { Provider, useSelector } from "react-redux";
import { counterStore } from "./Component/CounterRedux/redux/store";

function App() {
  const count = useSelector((state) => state.counter);
 
  return (
    <CounterRedux/>
  );
}

export default App;
