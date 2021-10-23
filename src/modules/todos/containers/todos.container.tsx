import React from "react";
import _ from "lodash";
import { AxiosResponse } from "axios";
import { useRecoilState } from "recoil";
import { TodosComponent } from "../components/todos.component";
import { updateTodo } from "../services/todos.service";
import { TodoType } from "../interfaces/todos.interface";

import { todosQuery } from "../atoms/todos.atoms";

export const TodosContainer = () => {
    const [todos, setTodos] = useRecoilState<any>(todosQuery);

    const handleCompleteToggle = async ({todo}: {todo: TodoType}) => {
        const updatedTodo: AxiosResponse<any> = await updateTodo({todo: {...todo, completed: !todo.completed}})
        const indexOfTodo: number = _.findIndex(todos, (localTodo: TodoType) => {return localTodo.id === todo.id})
        const localTodos: TodoType[] = [...todos];
        localTodos.splice(indexOfTodo, 1, updatedTodo.data)
        setTodos(localTodos)
    }

    return <TodosComponent todos={todos} onCompleteToggle={handleCompleteToggle} />
}