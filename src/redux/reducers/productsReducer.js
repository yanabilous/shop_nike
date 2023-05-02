
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';

const defaultState = {
	products: []
}

export const productsReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_PRODUCTS_SUCCESS:
			return { ...state, products: action.payload.products }
		default:
			return state
	}
}