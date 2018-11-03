import { CHANGE_ROUTE, NEXT_SLIDE, PREV_SLIDE } from './constants';

const initialStateRoute = {
	route: 'mapList'
}

const setRoute = (state=initialStateRoute, action={}) => {
	console.log(action.type);
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
	slideIndex: 0
}

const controlCarousel = (state=initialStateCarousel, action={}) => {
	let currentIndex;
	console.log(action.type);
	switch (action.type) {
		case NEXT_SLIDE: {
			console.log('next slide worked');
			let currentIndex = state.slideIndex;
			const index = currentIndex === state.slides.length - 1 ? 0 : ++currentIndex;
			return {
				slideIndex: index
			}
		}
		case PREV_SLIDE: {
			console.log('previous slide worked');
			let currentIndex = state.slideIndex;
			const index = currentIndex === 0 ? state.slides.length - 1 : --currentIndex;
			return {
				slideIndex: index
			}
		}
		default:
			console.log(action.payload);
			return state;
			
	}
}

export default setRoute;