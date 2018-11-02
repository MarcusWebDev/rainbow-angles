import { CHANGE_ROUTE, NEXT_SLIDE, PREV_SLIDE } from './constants';



const changeRoute = (route) => ({
	type: CHANGE_ROUTE,
	payload: route
})

const nextSlide = (slideIndex) => ({
	type: NEXT_SLIDE,
	payload: slideIndex
})

const prevSlide = (slideIndex) => ({
	type: PREV_SLIDE,
	payload: slideIndex
})

export default changeRoute;