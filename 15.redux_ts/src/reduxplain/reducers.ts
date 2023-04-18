import { combineReducers } from "redux";
import { ActionTypes, TodoAction } from "./actions";

export interface TodoState {
    todos: string[]
}

export const initialTodoState: TodoState = {
    todos: ["Lava l'auto", "Recupera figlio a scuola"]
}

export interface ThemeState {
    darkTheme: boolean
}

export const initialThemeState: ThemeState = {
    darkTheme: false
}

export function todoReducer(
    currentState: TodoState = initialTodoState,
    action: TodoAction
): TodoState {
    switch(action.type) {
        case ActionTypes.ADDTODO:
            return {
                ...currentState,     //SPREAD OPERATOR
                todos: [ ...currentState.todos, action.payload ]
            };
        case ActionTypes.COMPLETETODO:
            // clono i todo
            let newTodos = [ ...currentState.todos ];
            // 'completo' il todo
            newTodos.splice(action.payload, 1);
            // nuovo stato
            return {
                ...currentState,
                todos: newTodos
            }
            break;
        default:
            return currentState;
    }
}

export function themeReducer(
    currentState: ThemeState = initialThemeState,
    action: TodoAction
): ThemeState {
    switch(action.type) {
        case ActionTypes.TOGGLEDARKMODE:
            return {
                ...currentState,
                darkTheme: !currentState.darkTheme
            };
        default:
            return currentState;
    }
}

export interface AppState {
    todo: TodoState,
    theme: ThemeState
}

const appReducer = combineReducers({
    todo: todoReducer,
    theme: themeReducer
});

export default appReducer;