import React from 'react'
import { useSelector } from 'react-redux';
import { FavoriteProduct } from './FavoriteProduct';

let g = 0;
export const FavoritePage = () => {

	const prodFavorite = useSelector(state => state.prodFavoriteReducer.prodFavorite);

	return (
		<div className='container cart-page-wrapper'>
		<h2>MY FAVORITE</h2>

		<div className='flex cart-page__header'>
			<h5>ITEM</h5>
			<h5>PRICE</h5>
			<h5>REMOVE</h5>
		</div>

		{
			prodFavorite.map(product => (
				<FavoriteProduct 
				product={product} 
				key={product.id}
				/>
			))
		}


	</div>
	)
}
