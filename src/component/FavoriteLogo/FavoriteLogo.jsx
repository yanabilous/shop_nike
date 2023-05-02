import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './favoriteLogo.scss';

export const Favorite = ({ favorite }) => {
	const navigate = useNavigate();
	return (
		<div className="wrapper-logo-favorite">
			<h3
				className="header-favorite"
				onClick={() => {
					navigate("favorite");
				}}
			>Favorite</h3>
			<FaStar
				className={favorite.length > 0 ? "favorite-logo active" : "favorite-logo"}
				onClick={() => {
					navigate("favorite");
				}}
			/>

			{favorite.length > 0 ?
				<p
					className="favorite-cart"
					onClick={() => {
						navigate("favorite");
					}}
				>{favorite.length}</p>
				: false
			}
		</div>
	)
}

