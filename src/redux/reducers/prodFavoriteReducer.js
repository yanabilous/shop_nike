

export const GET_FAVORITE_PRODUCT = 'GET_FAVORITE_PRODUCT';


let stateProduct = JSON.parse(localStorage.getItem('prodFavorite')) == null ? [] : JSON.parse(localStorage.getItem('prodFavorite'));
const defaultState = {
	prodFavorite: stateProduct,
}


export const prodFavoriteReducer = (state = defaultState, action) => {
	switch (action.type) {
		case GET_FAVORITE_PRODUCT:
			return {...state, prodFavorite: action.payload.prodFavorite}
		default:
			return state
	}
}