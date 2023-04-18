export enum ActionTypes {
    ADDTODO = "AddTodo",
    COMPLETETODO = "CompleteTodo",
    TOGGLEDARKMODE = "ToggleDarkMode"
}

// ACTIONS
export interface AddTodo {
    type: ActionTypes.ADDTODO,
    payload: string
}

export interface CompleteTodo {
    type: ActionTypes.COMPLETETODO,
    payload: number
}

export interface ToggleDarkMode {
    type: ActionTypes.TOGGLEDARKMODE,
    payload: string
}

export type TodoAction = AddTodo | CompleteTodo | ToggleDarkMode;    // TYPE MERGE

// ACTION BUILDERS
export function addTodo(item: string) : AddTodo { 
    return { type: ActionTypes.ADDTODO, payload: item };
}

export function completeTodo(idx: number) : CompleteTodo { 
    return { type: ActionTypes.COMPLETETODO, payload: idx };
}

export function toggleDarkMode() : ToggleDarkMode { 
    return { type: ActionTypes.TOGGLEDARKMODE, payload: "" };
}