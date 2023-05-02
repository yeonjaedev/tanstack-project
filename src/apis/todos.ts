import axios from "axios";
import {Todo} from "../model/todo";

export const getTodos = () => {
    return axios.get("http://localhost:4001/todos");
};

export const addTodo = (todo: Todo) => {
    return axios.post("http://localhost:4001/todos", todo);
};
