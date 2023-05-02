import { GET_CART_PRODUCT } from "../reducers/cartProductReducer";




export const removeProduct = (cartProduct, productId) => {
	return (dispatch) => {
		let { [productId]: deletedProductId, ...newCartProduct } = cartProduct;
		dispatch({ type: GET_CART_PRODUCT, payload: { cartProduct: newCartProduct }})
		localStorage.setItem('cartProduct', JSON.stringify(newCartProduct))
	}
}