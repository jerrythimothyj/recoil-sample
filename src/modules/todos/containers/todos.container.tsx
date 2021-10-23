import React, { useEffect, useState } from "react";
import _ from "lodash";
import { TodosComponent } from "../components/todos.component";
import { fetchAllTodos, updateTodo } from "../services/todos.service";
import { TodoType } from "../interfaces/todos.interface";
import { AxiosResponse } from "axios";

export const TodosContainer = () => {
    const [todos, setTodos] = useState<TodoType[]>([])

    const fetchTodos = async () => {
        const fetchedTodos: AxiosResponse<any> = await fetchAllTodos()
        setTodos(fetchedTodos.data)
    }

    const handleCompleteToggle = async ({todo}: {todo: TodoType}) => {
        const updatedTodo: AxiosResponse<any> = await updateTodo({todo: {...todo, completed: !todo.completed}})
        const indexOfTodo: number = _.findIndex(todos, (localTodo: TodoType) => {return localTodo.id === todo.id})
        const localTodos: TodoType[] = [...todos];
        localTodos.splice(indexOfTodo, 1, updatedTodo.data)
        setTodos(localTodos)
    }

    useEffect(() => {
        fetchTodos()
    }, [])

    return <TodosComponent todos={todos} onCompleteToggle={handleCompleteToggle} />
}