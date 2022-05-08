import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text: text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id: id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, date: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((todo) => todo.date !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo,
};

export default store;
