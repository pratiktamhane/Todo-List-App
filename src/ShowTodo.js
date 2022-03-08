import React from "react";

function ShowTodo(props) {
  return (
    <div>
      <h6>{props.task}</h6>
      <button onClick={() => props.onSelect(props.id)}>X</button>
    </div>
  );
}
export default ShowTodo;
