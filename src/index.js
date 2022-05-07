import { createElement } from "react";
import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
// const EDIT_TODO = 'EDIT_TODO';

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

const todoModifier = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, date: Date.now() }];
    case DELETE_TODO:
      return state.filter((todo) => todo.date !== parseInt(action.id));
    default:
      return state;
  }
};

const store = createStore(todoModifier);

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = (id) => {
  store.dispatch(deleteTodo(id));
};

const applyToDoList = (text, date) => {
  const liComp = document.createElement("li");
  const textComp = document.createElement("p");
  const dateComp = document.createElement("p");
  const deleteButton = document.createElement("button");
  const dateToString = new Date(date)
    .toString()
    .split(" ")
    .slice(0, 5)
    .join(" ");

  dateComp.innerText = dateToString;
  liComp.id = date;
  textComp.innerText = text;

  deleteButton.innerText = "DEL";
  deleteButton.addEventListener("click", () => dispatchDeleteTodo(date));

  liComp.appendChild(textComp);
  liComp.appendChild(dateComp);
  liComp.appendChild(deleteButton);

  ul.appendChild(liComp);
};

const paintToDos = () => {
  ul.innerText = "";

  const todoList = store.getState();
  console.log(todoList);

  todoList.forEach((todo) => {
    console.log(todo);
    console.log(todo.text, todo.date);
    applyToDoList(todo.text, todo.date);
  });
};

store.subscribe(() => paintToDos());

const onSubmit = (event) => {
  event.preventDefault();

  const toDo = input.value;
  input.value = "";

  dispatchAddTodo(toDo);
};

form.addEventListener("submit", onSubmit);
