import { Interface } from "readline";
import { ActionsTypes, AppStateAction } from "./actions";
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Define Todo State
export interface TodoState {
    todos: string[];
}

// Create an initial state
export const initialTodoState: TodoState = {
    todos: [ "Lava l'auto", "Fai la spesa" ]
};

// Todo Reducer
const todoReducer = (
    currentState: TodoState = initialTodoState,
    action: AppStateAction
): TodoState => {
    switch(action.type) {

        case ActionsTypes.ADDTODO:  // DEEP CLONING
            return { 
                ...currentState,
                todos: [ ... currentState.todos, action.payload ]   // SPREAD OPERATOR
            }; // SPREAD OPERATOR (SHALLOW CLONING)
        
        case ActionsTypes.COMPLETETODO:
            let newTodos = [ ...currentState.todos ];
            newTodos.splice(action.payload, 1);

            return { ...currentState, todos: newTodos };
        
        default:
            return currentState;

    }
}

// Define Theme State
export interface ThemeState {
    darkMode: boolean;
}

// Create an initial state
const initialThemeState: ThemeState = { darkMode: false };

// Theme Reducer
const themeReducer = (
    currentState: ThemeState = initialThemeState,
    action: AppStateAction
): ThemeState => {
    switch(action.type) {
        case ActionsTypes.TOGGLEDARKMODE:
            return { ...currentState, darkMode: !currentState.darkMode };
        default:
            return currentState;
    }
}

// Define AppState
export interface AppState {
    todo: TodoState,
    theme: ThemeState
}

// Combine Reducers (including Redux-Form - TBD)
const appReducer = combineReducers({
    todo: todoReducer,
    theme: themeReducer,
    form: formReducer
});

export default appReducer;