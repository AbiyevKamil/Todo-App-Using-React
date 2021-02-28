// import React, { createContext, useState, useEffect } from "react";

// export const ContextAPI = createContext();

// export const ContextProvider = (props) => {
//   const [inputText, setInputText] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [status, setStatus] = useState("");
//   const [filteredTodos, setFilteredTodos] = useState([]);
//   useEffect(() => {
//     switch (status) {
//       case "completed":
//         setFilteredTodos(todos.filter((todo) => todo.completed === true));
//         break;
//       case "uncompleted":
//         setFilteredTodos(todos.filter((todo) => todo.completed === false));
//         break;
//       default:
//         setFilteredTodos(todos);
//         break;
//     }
//   }, [todos, status]);
//   return (
//     <ContextAPI.Provider
//       value={
//         ([inputText, setInputText],
//         [todos, setTodos],
//         [status, setStatus],
//         [filteredTodos, setFilteredTodos])
//       }
//     >
//       {props.children}
//     </ContextAPI.Provider>
//   );
// };
