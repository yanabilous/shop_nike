import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk))
)



// import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from "redux-thunk";
// import { rootReducer } from "../reducers/rootReducer";


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
// 	rootReducer,
// 	composeEnhancers(
// 		applyMiddleware(thunk)
// 	)
// );