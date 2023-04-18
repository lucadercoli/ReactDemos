import React, { useEffect, useState } from 'react';
import { createStore, applyMiddleware } from './tiny-redux';

// logger middleware
function logger(store: any) {
	var getState = store.getState;

	return function (next: any) {
		// this fn will be called every time you call store.dispatch if passed to applyMiddleware()
		return function (action: any) {
			console.log('[Logger] State before dispatch', getState());
            console.log('[Logger] Action dispatched', action);
			var returnValue = next(action); // Call the next dispatch method in the middleware chain.

			console.log('[Logger] State after dispatch', getState());

			return returnValue;
		};
	};
}

// DEFAULT STATE #######################
var defaultState = 0;

// reducer that calculates the new state based on
// actions that you dispatch
function tinyReducer(state = defaultState, action: any) {
	if (action.type === 'INCREMENT') {
		return state + 1;
	}
    if (action.type === 'DECREMENT') {
		return state - 1;
	}
	return state;
}
const store = createStore(tinyReducer, applyMiddleware(logger));

export const TestTinyRedux = () => {
    const [ count, setCount ] = useState(0);

    const handleIncrement = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        store.dispatch({type: 'INCREMENT'});
    };

    const handleDecrement = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        store.dispatch({type: 'DECREMENT'});
    };

    useEffect(() => {
        var unsubscribe = store.subscribe(function() {
            console.log('[Subscribe] STATE UPDATED', store.getState());
            setCount(store.getState());
        });

        return unsubscribe;
    }, []);

    return (
        <div>
            <div>Count: { count }</div>
            <button onClick={ handleIncrement }>Increment</button>
            <button onClick={ handleDecrement }>Decrement</button>
        </div>
    )
}
