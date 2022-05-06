import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const initialState = 0;

const ADD = "ADD";
const MINUS = "MINUS";

// modify your data only by reducers
const countModifier = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

// store your data
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

//subscribe -> onChange func will run when store was changed.
countStore.subscribe(onChange);

add.addEventListener("click", () => {
  countStore.dispatch({ type: ADD });
});

minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});
