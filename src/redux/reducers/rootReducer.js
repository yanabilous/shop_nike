import { combineReducers } from "redux"
import { cartProductReducer } from "./cartProductReducer"
import { modalActiveReducer } from "./modalActiveReducer"
import { prodFavoriteReducer } from "./prodFavoriteReducer"
import { productsReducer } from "./productsReducer"




export const rootReducer = combineReducers({
	products: productsReducer,
	cartProductReducer: cartProductReducer,
	prodFavoriteReducer: prodFavoriteReducer,
	modalActiveReducer: modalActiveReducer
})


