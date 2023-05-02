import { GET_CART_PRODUCT } from "../reducers/cartProductReducer"

export const addToCart = (productId) => {
	return (dispatch, getState) => {
		const state = getState();
		const cartProduct = state.cartProductReducer.cartProduct;


		let obj = {}
		if (cartProduct[productId]) {
			obj = {
				...cartProduct,
				[productId]: cartProduct[productId] + 1
			}
			dispatch({ type: GET_CART_PRODUCT, payload: { cartProduct: obj } })

		} else {
			obj = {
				...cartProduct,
				[productId]: 1
			}
			dispatch({ type: GET_CART_PRODUCT, payload: { cartProduct: obj } })
		}
		localStorage.setItem('cartProduct', JSON.stringify(obj))
	}
}
