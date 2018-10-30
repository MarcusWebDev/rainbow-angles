import { CHANGE_ROUTE } from './constants';


const changeRoute = (route) => ({
	type: CHANGE_ROUTE,
	payload: route
})

export default changeRoute;