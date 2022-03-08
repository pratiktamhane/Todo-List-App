import { useState } from "react";
import ShowTodo from "./ShowTodo";

function Todo() {
  const [task, setTask] = useState("add some task");
  const [data, setData] = useState([]);

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newData = task;
    setData([...data, newData]);
    setTask("");
  };
  const deleteItem = (a) => {
    const finalData = data.filter((curEle, index) => {
      return index != a;
    });
    setData(finalData);
  };

  return (
    <div className="container">
      <h4 className="text-center">Todo App</h4>

      <form onSubmit={submitHandler}>
        <div>
          <input
            id="todo-input"
            type="text"
            value={task}
            onChange={onChangeHandler}
          />
          <button type="submit">Add Todo</button>
        </div>
      </form>

      {data.map((value, index) => (
        <ShowTodo key={index} id={index} task={value} onSelect={deleteItem} />
      ))}
    </div>
  );
}
export default Todo;
