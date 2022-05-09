import React, { useState } from "react";
import "./create.component.css";

const ToDoFormCreate = ({ addTask }) => {
  const task = [
    {
      title: "",
      tags: [],
      description: "",
    },
  ];
  const [userInput, setUserInput] = useState(task);
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  const handleChange = (ev) => {
    let value = ev.target.value;
    setUserInput({
      ...userInput,
      [ev.target.name]: value,
      id: (+new Date()).toString() + 1,
      complete: false,
      date: date + " " + time,
    });
  };
  const handleChangeTags = (ev) => {
    ev.preventDefault();
    setUserInput({
      ...userInput,
      [ev.target.name]: ev.target.value.toLowerCase().split(/[ ,]+/),
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addTask(userInput);
    setUserInput(task);
  };

  return (
    <>
      <div className="create-card">
        <div className="create-card-title">
          <h1>Create</h1>
        </div>

        <form onSubmit={handleSubmit} className="form-create">
          <div className="title-tags-form">
            <label>Title</label>
            <input
              className="input-title"
              name="title"
              value={userInput.title}
              type="text"
              onChange={handleChange}
              placeholder="Enter title"
              required
            />
            <label>Tags</label>
            <input
              className="input-tags"
              name="tags"
              value={userInput.tags}
              type="text"
              onChange={handleChangeTags}
              placeholder="Enter tags"
              required
            />
          </div>
          <div className="description-button-form">
            <label>Description</label>
            <textarea
              className="input-description"
              name="description"
              value={userInput.description}
              type="text"
              onChange={handleChange}
              placeholder="Enter description"
              required
            />
            <button
              className="button-send"
              value="Submit"
              disabled={userInput.description ? "" : "disabled"}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ToDoFormCreate;
