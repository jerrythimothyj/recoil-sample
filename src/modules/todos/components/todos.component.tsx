import React from "react";
import { TodosComponentType, TodoType } from "../interfaces/todos.interface";

export const TodosComponent = ({todos, onCompleteToggle}: TodosComponentType) => {
    return <div>
        {
            todos.map((todo:TodoType, index: number) => {
                return <div key={index}>
                    {index+1}. {todo.title}
                    <input type="checkbox" onClick={() => onCompleteToggle({todo})} />
                </div>
            })
        }
    </div>
}