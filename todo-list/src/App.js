import { useState } from "react";
import "./App.css";
// import data from "./data.json";
import ToDoFormCreate from "./components/create/create.component";
import DoneList from "./components/done/done.component";
import ToDoList from "./components/todo/todo.component";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addTask = (newTask) => {
    let add = [...toDoList, newTask];
    setToDoList(add);
  };
  const handleToggle = (id) => {
    let toggle = toDoList.filter((task) => task.id === id);

    toggle[0].complete
      ? setToDoList([...toDoList, (toggle[0].complete = false)])
      : setToDoList([...toDoList, (toggle[0].complete = true)]);
  };
  const handleDelete = (id) => {
    let deleted = toDoList.filter((task) => task.id !== id);
    setToDoList(deleted);
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title-h1">ToDoApp</h1>
          <h2 className="App-title-h2">Application for project management</h2>
        </header>
        <div className="list-container">
          <ToDoFormCreate addTask={addTask} />
          <div className="list-todo-done">
            <ToDoList
              toDoList={toDoList}
              setToDoList={setToDoList}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
            <DoneList
              toDoList={toDoList}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
