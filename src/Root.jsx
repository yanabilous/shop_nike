import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header } from './component/Header/Header';
// import { GET_CART_PRODUCT } from './redux/reducers/cartProductReducer';
// import { GET_FAVORITE_PRODUCT } from './redux/reducers/prodFavoriteReducer';
import { productsThunk } from './redux/thunks/productsThunk';
import './root.scss';

const Root = () => {
	const dispatch = useDispatch();
	const cartProduct = useSelector(state => state.cartProductReducer.cartProduct)
	const prodFavorite = useSelector(state => state.prodFavoriteReducer.prodFavorite)

	useEffect(() => {
		dispatch(productsThunk())
	}, [dispatch])


	return (
		<>
			<Header
				favorite={prodFavorite}
				cartProduct={cartProduct}
				key='header'
			/>
			<Outlet/>
		</>
	)
}


export default Root;

