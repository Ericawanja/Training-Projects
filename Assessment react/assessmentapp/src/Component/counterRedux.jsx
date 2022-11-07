import React from "react";
import { createStore } from "redux";

function CounterRedux() {
    const initialState = {state: 0}
  const counterStore = createStore(counterReducer, initialState);
  const incrementCounter = () => {
    return { type: add };
  };

  console.log(counterStore)
  return <div>counterRedux

    <h1>{counterStore.getState().state}</h1>
  </div>;
}

export default CounterRedux;
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'add':
        return {...state, }
    
    default:
      return state;
  }
}
