import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { counterStore } from "./Component/CounterRedux/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={counterStore}>
    <App />
  </Provider>
  // </React.StrictMode>
);
