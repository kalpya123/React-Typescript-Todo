import React from "react";
import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTodo from "./Components/addTodoComponent";
import Todolist from "./Components/todolistComponent";
import TodoCompoents from "./Components/todoComponent";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
