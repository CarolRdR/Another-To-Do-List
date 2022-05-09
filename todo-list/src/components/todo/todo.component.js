import React from "react";
import Task from "../task/task.component";
import "./todo.component.css";
const ToDoList = ({ toDoList, handleToggle, handleDelete }) => {
  let filtered = toDoList.filter((task) => task.complete === false);
  return (
    <>
      <div className="todo-list-container">
        <div className="todo-card-title">
          <h1>TO-DO</h1>
        </div>
        <div className="todo-list">
          {filtered.map((toDo) => {
            return (
              <Task
                key={parseInt(Math.random() * 1_000_000_000, 10)}
                toDo={toDo}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ToDoList;
