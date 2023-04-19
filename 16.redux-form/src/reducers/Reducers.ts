import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { actionTypes } from '../actions/Actions';
import * as MyTypes from "MyTypes";

interface IPeopleModel {
    count: number;
    list: string[];
}

export const initialState: IPeopleModel = {
    count: 2,
    list: ["Roberto Ajolfi", "Mauro Bussini"]
};

export const peopleReducer = (state: IPeopleModel = initialState, action: MyTypes.RootAction) => {
    switch (action.type) {
        case actionTypes.ADD: {
            return {
                ...state,
                count: state.count + 1,
                list: [...state.list, action.payload]
            };
        }
        case actionTypes.DELETE: {
            const oldList = [...state.list];
            oldList.splice(action.payload, 1);
            const newList = oldList;

            return {
                ...state,
                count: state.count - 1,
                list: newList
            };
        }
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    people: peopleReducer,
    form: reduxFormReducer
});

export default rootReducer;