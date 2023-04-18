import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions/actions";
import { combineReducers } from "redux";
import { Ticket } from "../models/Ticket";

interface ITodoModel {
  todos: { todos: string[], count: number };
  tickets: Ticket[];
}

export const initialState: ITodoModel = {
  todos: { todos: ["Send Course slides", "Wash the car"], count: 2 },
  tickets: []
};

export const ticketReducer = (state: Ticket[] = initialState.tickets, action: MyTypes.RootAction) => {
  switch (action.type) {
    case actionTypes.TICKETSLIST: {
      return action.payload;
    }
    default:
      return state;
  }
};

export const todoReducer = (state: { todos: string[], count: number } = initialState.todos, action: MyTypes.RootAction) => {
  switch (action.type) {
    case actionTypes.ADD: {
      return {
        ...state, 
        todos: [...state.todos, action.payload],
        count: state.count + 1 };
    }
    case actionTypes.DELETE: {
      const oldList = [...state.todos];
      oldList.splice(action.payload, 1);
      const newList = oldList;

      return {...state, todos: newList, count: state.count - 1 };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todoReducer
  , tickets: ticketReducer
});

export default rootReducer;