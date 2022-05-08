import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

const milisecToDate = (time) => {
  return new Date(time).toString().split(" ").slice(0, 5).join(" ");
};

function ToDo({ text, id, onBtnClick }) {
  return (
    <li id={id}>
      <Link to={`/${id}`}>
        <h3>{text}</h3>
      </Link>
      <p>{milisecToDate(id)}</p>
      <button onClick={() => onBtnClick(id)}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onBtnClick: (id) => dispatch(remove(parseInt(id))),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
