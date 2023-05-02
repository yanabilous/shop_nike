import './colorProduct.scss'


export const ColorProduct = ({bg}) => {
		return (
			<li className="color-list-item">
				<a className="color-list-link" 
				style={bg} 
				href="#"></a>
			</li>
		)
}

