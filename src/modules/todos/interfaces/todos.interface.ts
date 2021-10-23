export type TodoType = {
    completed: boolean,
    id: number,
    title: string,
    userId: number
}

export type TodosComponentType = {
    todos: TodoType[],
    onCompleteToggle: ({todo}: {todo: TodoType}) => void
}
