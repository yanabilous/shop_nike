import './button.scss';

export const Button = ({text, bg, onClick}) => {
	return (
		<button
			type='button'
			onClick={onClick}
			style={bg}
			className='btn'
		>
			{text}
		</button>
	)
}

