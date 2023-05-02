

export const MODAL_IS_ACTIVE = 'MODAL_IS_ACTIVE';
export const MODAL_IS_NOT_ACTIVE = 'MODAL_IS_NOT_ACTIVE';
export const MODAL_CART_IS_ACTIVE = 'MODAL_CART_IS_ACTIVE';
export const MODAL_CART_IS_NOT_ACTIVE = 'MODAL_CART_IS_NOT_ACTIVE';

const defaultState = {
	modalActive: false,
	isActiveModalCart: false
}

export const modalActiveReducer = (state = defaultState, action) => {
	switch (action.type) {
		case MODAL_IS_ACTIVE:
			return { ...state, modalActive: true }
		case MODAL_IS_NOT_ACTIVE:
			return { ...state, modalActive: false }

		case MODAL_CART_IS_ACTIVE:
			return { ...state, isActiveModalCart: true }
		case MODAL_CART_IS_NOT_ACTIVE:
			return { ...state, isActiveModalCart: false }
		default:
			return state
	}
}