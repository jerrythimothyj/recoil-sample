import { getApi, putApi } from "../../api"
import { TodoType } from "../interfaces/todos.interface";

export const fetchAllTodos = () => {
    return getApi({url: "/"});
}

export const updateTodo = ({todo}: {todo: TodoType}) => {
    return putApi({url: `/${todo.id}`, data: todo});
}