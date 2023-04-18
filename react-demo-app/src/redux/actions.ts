export enum ActionsTypes {
    ADDTODO = "AddTodo",
    COMPLETETODO = "CompleteTodo",
    TOGGLEDARKMODE = "ToggleDarkMode"
}

// ACTIONS

export interface AddTodo {
    type: ActionsTypes.ADDTODO;
    payload: string;
}

export interface CompleteTodo {
    type: ActionsTypes.COMPLETETODO;
    payload: number;
}

export interface ToggleDarkMode {
    type: ActionsTypes.TOGGLEDARKMODE;
    payload: string;
}

// TYPE MERGING

export type AppStateAction = AddTodo | CompleteTodo | ToggleDarkMode;

// ACTION BUILDERS

export function addTodo(item: string): AddTodo {
    return { type: ActionsTypes.ADDTODO, payload: item };
}

export function completeTodo(index: number): CompleteTodo {
    return { type: ActionsTypes.COMPLETETODO, payload: index };
}

export function toggleDarkMode(): ToggleDarkMode {
    return { type: ActionsTypes.TOGGLEDARKMODE, payload: '' };
}