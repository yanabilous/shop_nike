
import './modal.scss'

export const Modal = (props) => {
	const {active, close, header, text, actions} = props;
	return (
		<div className={active ? 'modal active' : 'modal'} onClick={close}>
			<div className="modal__content" onClick={(e) => e.stopPropagation()}>
				<div className="modal__header">
					<h3>{header}</h3>
					<h3 className="modal__header-close-btn" onClick={close}>x</h3>
				</div>
				<p>{text}</p>
				<div className="modal__container-btn">
					{actions}
				</div>
			</div>
		</div>
	)
}

