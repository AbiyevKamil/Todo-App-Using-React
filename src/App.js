import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./styles/style.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }, [todos, status]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>
            <span className="t1">T</span>
            <span className="o1">O</span>
            <span className="d">D</span>
            <span className="o2">O</span>
            <span className="a1" style={{ marginLeft: "0.4rem" }}>
              A
            </span>
            <span className="p1">P</span>
            <span className="p2">P</span>
            <span className="b1" style={{ marginLeft: "0.4rem" }}>
              B
            </span>
            <span className="y">Y</span>
            <span className="t2" style={{ marginLeft: "0.4rem" }}>
              T
            </span>
            <span className="h">H</span>
            <span className="e">E</span>
            <span className="b2" style={{ marginLeft: "0.4rem" }}>
              B
            </span>
            <span className="l">L</span>
            <span className="a2">A</span>
            <span className="c">C</span>
            <span className="k">K</span>
          </h1>
        </header>
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          status={status}
          setStatus={setStatus}
        />
        <TodoList
          filteredTodos={filteredTodos}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
};

export default App;
