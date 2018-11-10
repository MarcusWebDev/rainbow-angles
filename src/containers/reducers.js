import { CHANGE_ROUTE, NEXT_SLIDE, PREV_SLIDE, TO_FLOOR, TO_TARGET_SLIDE, TURN_ON_LIGHT_BOX, TURN_OFF_LIGHT_BOX } from './constants';

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
	slideIndex: 0,
	lightBoxStatus: 'off'
}

export const controlCarousel = (state=initialStateCarousel, action={}) => {
	switch (action.type) {
		case NEXT_SLIDE: {
			let currentIndex = action.slideIndex;
			const index = currentIndex === action.slides.length - 1 ? 0 : ++currentIndex; 
			return Object.assign({}, state, { 
				slideIndex: index
			})
		}
		case PREV_SLIDE: {
			let currentIndex = action.slideIndex;
			const index = currentIndex === 0 ? action.slides.length - 1 : --currentIndex;
			return Object.assign({}, state, {
				slideIndex: index
			})
		}
		case TO_FLOOR: {
			return Object.assign({}, state, { 
				slideIndex: action.floorStart
			})
		}
		case TO_TARGET_SLIDE: {
			return Object.assign({}, state, { 
				slideIndex: action.targetSlide
			})
		}
		case TURN_ON_LIGHT_BOX: {
			console.log(action.picture);
			return Object.assign({}, state, { 
				lightBoxStatus: action.status,
				lightBoxPicture: action.picture
			})
		}
		case TURN_OFF_LIGHT_BOX: {
			return Object.assign({}, state, { 
				lightBoxStatus: action.status
			})
		}
		default:
			return state;
			
	}
}
