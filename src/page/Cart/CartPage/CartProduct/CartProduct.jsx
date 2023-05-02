import React, { useState } from 'react';
import { InputCartProduct } from './InputCartProduct/InputCartProduct';
import './cartProduct.scss';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../../redux/thunks/removeProductCart';

export const CartProduct = ({ products, quantity, productId, cartProduct }) => {
	const [amount, setAmount] = useState(quantity);
	const dispatch = useDispatch();

	return (
		<div className='wrapper-product'>
			{products.map(product => (
				productId == product.id ?
					<>
						<div className='wrapper-item'>
							<img src={product.img_url} alt={product.name} />
							<h5>{product.name}</h5>
						</div>
						<h5>{product.price}</h5>

						<InputCartProduct 
							key={`inp-${product.id}`}
							removeProduct={removeProduct}
							amount={amount}
							setAmount={setAmount}
							cartProduct={cartProduct}
							productId={productId}
							/>

						<h5>{product.price * amount}</h5>
					</>
					: false)
			)}
			<button onClick={() => dispatch(removeProduct(cartProduct, productId))}>Delete</button>
		</div>
	)
}

