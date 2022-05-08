import {
  configureStore,
  createSlice,
  createAction,
  createReducer,
} from "@reduxjs/toolkit";

// const addTodo = createAction("ADD_TODO");
// const deleteTodo = createAction("DELETE_TODO");

// const reducer = createReducer([], {
//   [addTodo]: (state, action) => {
//     state.push({ text: action.payload, date: Date.now() });
//   },
//   [deleteTodo]: (state, action) => {
//     state.filter((todo) => todo.date !== action.payload);
//   },
// });

const toDo = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, date: Date.now() });
    },
    remove: (state, action) => {
      state.filter((todo) => todo.date !== action.payload);
    },
  },
});

const store = configureStore({ reducer: toDo.reducer });

export const { add, remove } = toDo.actions;

export default store;
