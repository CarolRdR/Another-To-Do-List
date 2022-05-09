import React from "react";
import "./task.component.css";
import Tags from "../tags/tags.component.js";

const Task = ({ toDo, handleToggle, handleDelete }) => {
  return (
    <>
      {/* <div id={toDo.id} key={toDo.id + toDo.task} name="toDo" value={toDo.id}> */}
      <div className="todo-task">
        <div className="todo-task-title">
          {toDo.title}
          <button
            className="button-delete"
            onClick={() => {
              handleDelete(toDo.id);
            }}
          >
            X
          </button>
        </div>
        <Tags className="todo-task-tags" toDo={toDo} />
        <div className="todo-task-description">{toDo.description}</div>
        <div className="todo-task-date">{toDo.date}</div>
        <button
          className={toDo.complete ? "button-todo" : "button-done"}
          onClick={() => {
            handleToggle(toDo.id);
          }}
        >
          {toDo.complete ? "TO-DO" : "DONE"}
        </button>
      </div>
      {/* </div> */}
    </>
  );
};

export default Task;
