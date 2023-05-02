import { GET_FAVORITE_PRODUCT } from "../reducers/prodFavoriteReducer";


export const removeFavorite = (product, prodFavorite) => {
	return (dispatch) => {
		let newArr = prodFavorite.filter(item => item.id !== product.id);
		localStorage.setItem('prodFavorite', JSON.stringify(newArr));
		dispatch({ type: GET_FAVORITE_PRODUCT, payload: { prodFavorite: newArr } });
	}
}