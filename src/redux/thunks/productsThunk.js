import { GET_PRODUCTS_SUCCESS } from "../reducers/productsReducer";


export const productsThunk = () => {
	return (dispatch, getState) => {
		fetch('./data/data.json')
			.then(response => response.json())
			.then(data => dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data }))
			.catch(error => console.error(error));
	}
}