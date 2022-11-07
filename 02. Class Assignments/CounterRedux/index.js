import { createStore } from "redux";

const h1 = document.getElementById("counter");
const increment_btn = document.getElementById("increment");
const decrement_btn = document.getElementById("decrement");

const increment = () => {
  return { type: "increment" };
};

const decrement = () => {
  return { type: "decrement" };
};

let counter = 0;
const counterStore = createStore(counterReducers, counter);
increment_btn.addEventListener("click", () => {
  counterStore.dispatch(increment());
  h1.innerText = counterStore.getState();
});

decrement_btn.addEventListener("click", () => {
  counterStore.dispatch(decrement());
  h1.innerText = counterStore.getState();
});

console.log(counterStore.getState(), 'hhhh');

function counterReducers(state, action) {
  console.log(state, "state");

  switch (action.type) {
    case "increment":
      return state + 1;
       
    case "decrement":
      return state - 1;

    default:
      return state;
  }
  console.log(state, 'end');
}
