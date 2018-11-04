import { CHANGE_ROUTE, NEXT_SLIDE, PREV_SLIDE } from './constants';

const initialStateRoute = {
	route: 'mapList'
}

export const setRoute = (state=initialStateRoute, action={}) => {
	switch(action.type) {
		case CHANGE_ROUTE:
			return Object.assign({}, state, {
				route: action.payload
			})
		default:
			return state;
	}
}

const initialStateCarousel = {
	slides: [],
	slideIndex: 0
}

export const controlCarousel = (state=initialStateCarousel, action={}) => {
	switch (action.type) {
		case NEXT_SLIDE: {
			let currentIndex = action.slideIndex;
			const index = currentIndex === action.slides.length - 1 ? 0 : ++currentIndex; 
			return {
				slides: [action.slides],
				slideIndex: index
			}
		}
		case PREV_SLIDE: {
			let currentIndex = action.slideIndex;
			const index = currentIndex === 0 ? action.slides.length - 1 : --currentIndex;
			return {
				slides: [action.slides],
				slideIndex: index
			}
		}
		default:
			console.log(action.payload);
			return state;
			
	}
}
