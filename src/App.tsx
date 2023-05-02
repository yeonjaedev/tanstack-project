import {useEffect, useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {useAddTodoQuery, useTodosQuery} from "./hooks/useTodosQuery";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
    return (
        <div className="App">
            <h2>React Query Test</h2>
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default App;
