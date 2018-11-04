import { CHANGE_ROUTE, NEXT_SLIDE, PREV_SLIDE } from './constants';



export const changeRoute = (route) => ({
	type: CHANGE_ROUTE,
	payload: route
})

export const nextSlide = (slideIndex, pictures) => ({
	type: NEXT_SLIDE,
	slideIndex: slideIndex,
	slides: pictures
})

export const prevSlide = (slideIndex, pictures) => ({
	type: PREV_SLIDE,
	slideIndex: slideIndex,
	slides: pictures
})
