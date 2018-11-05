import { CHANGE_ROUTE, NEXT_SLIDE, PREV_SLIDE, TO_OBJECTIVE, TO_TARGET_SLIDE, TURN_ON_LIGHT_BOX, TURN_OFF_LIGHT_BOX } from './constants';



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
export const toObjective = (objectiveStart) => ({
	type: TO_OBJECTIVE,
	objectiveStart: objectiveStart
})

export const toTargetSlide = (targetSlide) => ({
	type: TO_TARGET_SLIDE,
	targetSlide: targetSlide
})
export const turnOnLightBox = () => ({
	type: TURN_ON_LIGHT_BOX,
	payload: 'on'
})
export const turnOffLightBox = () => ({
	type: TURN_OFF_LIGHT_BOX,
	payload: 'off'
})