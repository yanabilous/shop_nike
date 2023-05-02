import { ProductItem } from '../ProductItem/ProductItem';
import './productList.scss'



export const ProductList = (props) => {
	const { products, showModal, addProductToCartCheck, favoriteColorActive } = props;
	return (
		<div className="flex">
			{products.map(product =>
				<div className="product-wrapper" key={product.id}>
					<ProductItem
						product={product}
						color={product.color}
						favoriteColorActive={favoriteColorActive}
						showModalList={(active) => showModal(active)}
						addProductToCartCheck={addProductToCartCheck}
					/>
				</div>
			)}
		</div>
	)
}

// ProductList.propTypes = {
// 	removeFromFavorites: PropTypes.func,
// 	addFavorite: PropTypes.func
// };


