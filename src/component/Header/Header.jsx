import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { MODAL_CART_IS_ACTIVE, MODAL_CART_IS_NOT_ACTIVE} from "../../redux/reducers/modalActiveReducer";
import { CartLogo } from "../CartLogo/CartLogo";
import { Favorite } from "../FavoriteLogo/FavoriteLogo";
import ModalCart from "../ModalCart/ModalCart";
import './header.scss'


export const Header = ({ favorite, cartProduct }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isActiveModalCart = useSelector(state => state.modalActiveReducer.isActiveModalCart);

	const handlerActiveModalCart = (active) => {
		isActiveModalCart ? dispatch({type: MODAL_CART_IS_NOT_ACTIVE}) : dispatch({type: MODAL_CART_IS_ACTIVE});
	}

	return (
		<>
			<div className="flex-start header">
				<Link to="/">
					  <img className="logo" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"} style={{maxWidth: "500px", height: "50px"}}/>

				</Link>
				<h1
					onClick={() => {
					navigate("/");
				}}
				>Nike SHOP</h1>
				<div className="flex">
					<CartLogo cartProduct={cartProduct} />
					<Favorite favorite={favorite} />
				</div>

				<ModalCart 
				handlerActiveModalCart={handlerActiveModalCart}
					
				/>
			</div>
			
		</>
	)
}




