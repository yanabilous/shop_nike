

export const GET_CART_PRODUCT = 'GET_CART_PRODUCT';
export const CLEAR_CART_PRODUCT = 'CLEAR_CART_PRODUCT';


let stateProduct = JSON.parse(localStorage.getItem('cartProduct')) == null ? [] : JSON.parse(localStorage.getItem('cartProduct'));

const defaultState = {
	cartProduct: stateProduct,
}


export const cartProductReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_CART_PRODUCT:
			return {...state, cartProduct: action.payload.cartProduct}
		case CLEAR_CART_PRODUCT:
			return {...state, cartProduct: action.payload.cartProduct}

		default:
			return state
	}
}
