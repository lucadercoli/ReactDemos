// Versione semplificata di Redix
// Based on https://github.com/jamischarles/tiny-redux

const TINY_REDUX_INIT = 'TINY_REDUX_INIT';  // init action code (no magic strings thanks!)

// crea e restituisce lo store
export function createStore(reducer, enhancer) {

	// tiene conto degli eventuali enhancer come applymiddleware, demanda all'enhancer la
	// chiamata a createStore in modo che possa modificare il metodo dispatch() 
	if (typeof enhancer === "function") {
		return enhancer(createStore)(reducer);
	}

	var state;
	var subscriptions = [];

    // l'oggetto restituito contiene le funzioni getState(), dispatch() e subscribe()
	var obj = {
		getState: function() {
			return state;
		},
		// invoca il reducer, assegna il nuovo stato, notifica il cambiamento
		dispatch: function(action) {
			state = reducer(state, action);

			// notifica 
			subscriptions.forEach(function(fn) {
				fn();
			})

			return action;
		},
		// funzione per registarsi alla notifica dei cambi di stato
		subscribe: function(fn) {
			subscriptions.push(fn);

			// utilizzo 'var unsub = subscribe(fn)' - restituisce la funzione di unsubscribe
			return function unsubscribe() {
				// cerca il listener e lo rimuove
				var index = subscriptions.indexOf(fn);
				subscriptions.splice(index, 1);
			}
		}
	}

	// popola lo store con il default state (inizializzazione)
    obj.dispatch({type: TINY_REDUX_INIT});
    
	return obj;
}

// combina più reducer in uno solo, che invochi tutti gli altri e ricostruisca lo stato
export function combineReducers(stateTree) {
	var keys = Object.keys(stateTree);

	// returns a function that returns the state tree
	return function rootReducer(state = {}, action) {

		// fa un loop di tutte le key passate nello stateTree
		// stateTree = {
		// 	key1: key1Reducer,
        // 	key2: key2Reducer,
        //  ...
		// })
		for (var i=0; i < keys.length; i++) {
			var key = keys[i];
			var reducer = stateTree[key];
			var subState = state[key];

			// chiama ogni reducer, e salva i dati restituiti nella key corrispondente
			// key1: key1Reducer(appleState, action),
            // key2: key2Reducer(orangeState, action),
            // ...
			state[key] = reducer(subState, action);
		}

		return state;
	}
}

// può essere passato a createStore come secondo parametro, to enhance dispatch functions with special middleware
// After that the middleware functions will be called before the regular dispatch whenever you call
// store.dispatch()
export function applyMiddleware(...fns) {

    // la funzione chiamata da 'return enhancer(createStore)(reducer)' 
    // ovvero applyMiddleware(...fns)(createStore)(reducer)
    return function(createStore) {

		// questa fn crea uno store con il metodo dispatch 'wrappato' in modo da
		// invocare le funzioni di middleware e infine il dispatch() 'ufficiale'
        return function(reducer) {
            var store = createStore(reducer);
            var oldDispatch = store.dispatch;

			// a partire dalla fine dell'array fns (middleware functions) 
			// crea una catena di chiamate es. logger() -> anyOtherMiddleware() -> dispatch()
            store.dispatch = fns.reduceRight(function(prev, curr) {
				return curr(store)(prev); // es. dispatch = logger(store)(oldDispatch)
            }, oldDispatch)

            return store; 
        }
    }
}
