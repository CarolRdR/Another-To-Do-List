import React from "react";
import Task from "../task/task.component";
import "./done.component.css";

const DoneList = ({ toDoList, handleToggle, handleDelete }) => {
  let filtered = toDoList.filter((task) => task.complete === true);

  return (
    <>
      <div className="done-list-container">
        <div className="done-card-title">
          <h1>DONE</h1>
        </div>
        <div className="done-list">
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

export default DoneList;
