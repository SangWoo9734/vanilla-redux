import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

function Detail() {
  const id = useParams();
  const [toDo, setToDo] = useState(null);
  const toDos = useSelector((state) => state);

  useEffect(() => {
    const toDoData = toDos.find((toDo) => toDo.date === parseInt(id.id));
    setToDo(toDoData);
  }, []);

  const milisecToDate = (time) => {
    return new Date(time).toString().split(" ").slice(0, 5).join(" ");
  };

  return (
    <div>
      <h1>{toDo?.text}</h1>
      <p>Created At: {milisecToDate(toDo?.date)}</p>
    </div>
  );
}

export default Detail;
