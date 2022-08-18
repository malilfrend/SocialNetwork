import {setAuthData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initialState = {
	initialized: false,
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}
		default:
			return state
	}
}

const initializedSuccess = () => {
	return {
		type: INITIALIZED_SUCCESS
	}
}

export const initializeApp = () =>  (dispatch) => {
	let promise = dispatch(setAuthData())
	Promise.all([promise])
		.then(() => {
			dispatch(initializedSuccess())
		})
}

export {appReducer}