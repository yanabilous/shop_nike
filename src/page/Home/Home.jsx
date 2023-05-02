import { React,  useState } from 'react';
import { Modal } from '../../component/Modal/Modal';
import { Button } from '../../component/Button/Button';
import { ProductList } from '../../component/ProductList/ProductList';
import './home.scss'
// import { useOutletContext } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MODAL_IS_ACTIVE, MODAL_IS_NOT_ACTIVE } from '../../redux/reducers/modalActiveReducer';
import { addToCart } from '../../redux/thunks/addToCart';
// import { GET_CART_PRODUCT } from '../../redux/reducers/cartProductReducer';

let k = 0;

const Home = () => {

	const products = useSelector(state => state.products.products);
	// const addProductToCartСheck = useSelector(state => state.addProductToCartСheck.addProductToCartСheck);
	const modalActive = useSelector(state => state.modalActiveReducer.modalActive);
	const cartProduct = useSelector(state => state.cartProductReducer.cartProduct);
	const dispatch = useDispatch();

	const [checkAdd, setCheckAdd] = useState('');
	const [favoriteColor, setFavoriteColor] = useState(false);


	const activeModal = () => {
		modalActive ? dispatch({type: MODAL_IS_NOT_ACTIVE}) : dispatch({type: MODAL_IS_ACTIVE});
	}


	const check = (product) => setCheckAdd(product);



	const addFavoriteColor = () => {
		favoriteColor ? setFavoriteColor(false) : setFavoriteColor(true);
	}




	return (

		<>
			{modalActive && (
				<Modal
					key='Modal'
					active={modalActive}
					close={activeModal}
					header=''
					text='Do you want add product to cart?'
					actions={
						<>
							<Button
								key={'Button'}
								text='Ok'
								onClick={() => {
									activeModal();
									dispatch(addToCart(checkAdd, cartProduct))
								}} />
							<Button
								key={'Button-02'}
								text='Cancel'
								onClick={activeModal} />
						</>}
				/>)
			}
			<div className='flex'>
				<div className='container'>
					<ProductList
						key={'ProductList'}
						products={products}
						showModal={activeModal}
						addProductToCartCheck={check}
						favoriteColorActive={addFavoriteColor}
						/>
				</div>
			</div>
		</>
	);
}


export default Home;

