import { CHANGE_ROUTE, NEXT_SLIDE, PREV_SLIDE } from './constants';

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

const initialStateCarousel = {
	slides: [],
	slideIndex: 0
}

const controlCarousel = (state=initialStateCarousel, action={}) => {
	let currentIndex;
	switch (action.type) {
		case NEXT_SLIDE: {
			console.log(action.payload);
			let currentIndex = action.payload;
			const index = currentIndex === state.slides.length - 1 ? 0 : ++currentIndex;
			return {
				slides: state.slides[index],
				slideIndex: index
			}
		}
		case PREV_SLIDE: {
			console.log(action.payload);
			let currentIndex = action.payload;
			const index = currentIndex === 0 ? state.slides.length - 1 : --currentIndex;
			return {
				slides: state.slides[index],
				slideIndex: index
			}
		}
		default:
			console.log(action.payload);
			return state;
			
	}
}

export default setRoute;