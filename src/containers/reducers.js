import { CHANGE_ROUTE } from './constants';

const initialStateRoute = {
	route: 'mapList'
}

const setRoute = (state=initialStateRoute, action={}) => {
	switch(action.type) {
		case CHANGE_ROUTE:
			return Object.assign({}, state, {
				route: action.payload
			})
		default:
			return state;
	}
}

export default setRoute;