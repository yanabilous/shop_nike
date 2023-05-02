
import { GET_FAVORITE_PRODUCT } from "../reducers/prodFavoriteReducer";

export const addToFavorite = (product) => {
	return (dispatch) => {
		product.isActiveFavorite = true;
		let prod = [];
		if (!!localStorage.getItem('prodFavorite')) {
			prod = [...JSON.parse(localStorage.getItem('prodFavorite'))];
		}
		prod.push(product);
		localStorage.setItem('prodFavorite', JSON.stringify(prod))
		dispatch({ type: GET_FAVORITE_PRODUCT, payload: { prodFavorite: prod } })
	}
}