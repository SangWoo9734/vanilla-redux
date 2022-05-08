import React, { useState } from "react";
import { connect } from "react-redux";

import ToDo from "../components/Todo";
import { add } from "../store";

function Home({ toDos, addTodo }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Write To Do..."
        />
        <button>ADD</button>
      </form>
      <ul>
        {toDos.map((toDo, index) => {
          return <ToDo key={index} text={toDo.text} id={toDo.date} />;
        })}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(add(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
