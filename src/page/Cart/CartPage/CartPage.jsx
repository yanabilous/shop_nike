import { useDispatch, useSelector } from 'react-redux';
import { CartProduct } from './CartProduct/CartProduct';
import './cartPage.scss'
import { MODAL_CART_IS_ACTIVE } from '../../../redux/reducers/modalActiveReducer';

// let r = 0;
export const CartPage = () => {
	// console.log('CartPage: ' + r++);
	const products = useSelector(state => state.products.products);
	const cartProduct = useSelector(state => state.cartProductReducer.cartProduct)
	const isActiveModalCart = useSelector(state => state.modalActiveReducer.isActiveModalCart);
	const dispatch = useDispatch();


	return (
		<div className='container cart-page-wrapper'>
			<h2>SOPING CART</h2>

			<div className='flex cart-page__header'>
				<h5>ITEM</h5>
				<h5>PRICE</h5>
				<h5>QUANTITY</h5>
				<h5>TOTAL</h5>
				<h5>REMOVE</h5>
			</div>

			{
				Object.entries(cartProduct).map(([productId, quant]) =>

					<CartProduct
						cartProduct={cartProduct}
						products={products}
						quantity={quant}
						productId={productId}
						key={`cart-page-${productId}`} />
				)
			}

			<div className='flex-end'>
				{/* <h5>total</h5> */}
				<button
					className='btn'
					onClick={() => dispatch({ type: MODAL_CART_IS_ACTIVE })}
				>
					BUY
				</button>
			</div>
		</div>
	)
}

