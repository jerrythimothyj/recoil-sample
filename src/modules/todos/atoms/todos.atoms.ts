import { atom, selector } from "recoil";
import { fetchAllTodos } from "../services/todos.service";

export const todosState:any = atom({
    key: 'todosState',
    default: [],
})

export const todosQuery:any = selector({
    key: 'currentTodos',
    get: async ({ get }) => {
        const allTodos: any = get(todosState);
        if(allTodos?.length)
            return allTodos
        const fetchedTodos = await fetchAllTodos();
        return fetchedTodos.data;
    },
    set: ({set}, newValue) => {
        set(todosState,newValue)
    }
})