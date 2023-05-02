import { useNavigate } from "react-router-dom";
import './cartLogo.scss';
import { FaCartArrowDown } from "react-icons/fa";



export const CartLogo = ({ cartProduct }) => {
	const navigate = useNavigate();

	let quantity = 0;
	Object.entries(cartProduct).map(([id, quant]) =>  quantity += quant);

	return (
		<div className="wrapper-logo-cart">
			<h3 onClick={() => {
				navigate("cart");
			}}>Cart</h3>
			<FaCartArrowDown
				className={quantity > 0 ? "cart-logo active" : "cart-logo"}
				onClick={() => {
					navigate("cart");
				}}
			/>
			{quantity > 0 ?
				<p
				className='shop-cart'
				onClick={() => {
					navigate("cart");
				}}
				>{quantity}</p>
				: false
			}
		</div>
	)
}


// CartLogo.propTypes = {
// 	cartProduct: PropTypes.array,
// }

