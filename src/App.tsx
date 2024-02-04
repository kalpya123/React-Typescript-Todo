import React from "react";
import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTodo from "./Components/addTodoComponent";
import Todolist from "./Components/todolistComponent";
import TodoCompoents from "./Components/todoComponent";
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          TodoList
        </Link>
        <div className="navbar-nav mr-auto">
          {/* <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                
              </Link>
            </li> */}
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Todolist />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/update/:id" element={<TodoCompoents />} />
      </Routes>
    </div>
  );
}

export default App;
