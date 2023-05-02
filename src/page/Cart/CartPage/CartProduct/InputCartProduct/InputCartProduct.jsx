
import { useDispatch } from 'react-redux';
import { GET_CART_PRODUCT } from '../../../../../redux/reducers/cartProductReducer';
import './inputCartProduct.scss'

export const InputCartProduct = ({ productId, cartProduct, amount, setAmount, removeProduct }) => {
	const dispatch = useDispatch();
	
	const amountProducts = (event) => {
		const newValue = parseInt(event.target.value);
		let obj = {}

		if (cartProduct[productId] && newValue > amount) {
			obj = {
				...cartProduct,
				[productId]: cartProduct[productId] + 1 
			}
			dispatch({ type: GET_CART_PRODUCT, payload: { cartProduct: obj }})
			
		} else if (cartProduct[productId] && newValue < amount) {
			obj = {
				...cartProduct,
				[productId]: cartProduct[productId] - 1 
			}
			dispatch({ type: GET_CART_PRODUCT, payload: { cartProduct: obj }})
		} else {
			obj = {
				...cartProduct,
				[productId]: 1
			}
			dispatch({ type: GET_CART_PRODUCT, payload: { cartProduct: obj }})
		}
		localStorage.setItem('cartProduct', JSON.stringify(obj))
		setAmount(newValue);
		event.target.value <= 0 ? dispatch(removeProduct(cartProduct, productId)) : false;
	}

	return (
		<>
			<div className='wrapper-input-product'>
				<input className='input-product'
					onChange={(event) => (
						amountProducts(event))}
					type='number'
					step="1"
					min="0"
					autoComplete="off."
					value={amount}
				></input>
			</div>
		</>
	)
}

