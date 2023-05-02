import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import '../../../component/ProductList/productList.scss'
import { removeFavorite } from '../../../redux/thunks/removeFavorite';

export const FavoriteProduct = ({ product }) => {
	const prodFavorite = useSelector(state => state.prodFavoriteReducer.prodFavorite)
	const dispatch = useDispatch();
	return (
		<div>
			<div className='wrapper-product'>

				<div className='wrapper-item'>
					<img src={product.img_url} alt={product.name} />
					<h5>{product.name}</h5>
				</div>
				<h5>{product.price}</h5>


				<FaStar
					style={{cursor: 'pointer'}}
					className={product.isActiveFavorite ? "star-active" : "favorite"}
					onClick={() => dispatch(removeFavorite(product, prodFavorite))}
				/>
			</div>
		</div>
	)
}

