import React, { Component } from 'react';
import { connect } from 'react-redux'
import Arrow from './Arrow';
import { nextSlide, prevSlide, toFloor, toTargetSlide, lightBoxOn, lightBoxOff } from '../../containers/actions';
import Scroll from '../Scroll/Scroll';
import NavBar from './NavBar';
import ImageBox from './ImageBox';
import LightBox from './LightBox';
import Dots from './Dots';
import './Carousel.css';

const mapStateToProps = (state) => {
	return {
		slideIndex: state.controlCarousel.slideIndex,
		lightBoxStatus: state.controlCarousel.lightBoxStatus,
		lightBoxPicture: state.controlCarousel.lightBoxPicture
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		slideChangeNext: (slideIndex, pictures) => {dispatch(nextSlide(slideIndex, pictures))},
		slideChangePrev: (slideIndex, pictures) => {dispatch(prevSlide(slideIndex, pictures))},
		navigateToFloor: (floorStart) => {dispatch(toFloor(floorStart))},
		navigateToTargetSlide: (targetSlide) => {dispatch(toTargetSlide(targetSlide))},
		turnOnLightBox: (lightBoxPicture) => {dispatch(lightBoxOn(lightBoxPicture))},
		turnOffLightBox: () => {dispatch(lightBoxOff())}
	}
}

class Carousel extends Component {
	render () {	

		const { pictures, slideIndex, text, floorStart, floorNames, lightBoxStatus, lightBoxPicture, slideChangeNext, slideChangePrev, navigateToFloor, navigateToTargetSlide, turnOnLightBox, turnOffLightBox } = this.props;
		
		const shortToFull = {
			'B': 'Basement',
			'1st': 'First Floor',
			'2nd': 'Second Floor',
			'3rd': 'Third Floor',
			'4th': 'Fourth Floor'
		}
		const fullFloorNames = floorNames.map((name) => shortToFull[name] || 'Something\'s wrong with the header');

		 return (
		 	<div>
			 	<h1> 
					{	
						fullFloorNames.map((name, i) => {
							if (i === 0) {
								if (slideIndex < floorStart[0]) {
									return fullFloorNames[0];
								}
							}
							else if (i === fullFloorNames.length - 1) {
								if (slideIndex >= floorStart[floorStart.length - 1]) {
									return fullFloorNames[fullFloorNames.length - 1];
								}
							}
							else {
								if (slideIndex >= floorStart[i - 1] && slideIndex < floorStart[i]) {
									return fullFloorNames[i];
								}
							}
						})
			 	 	}
			 	</h1>
			 	<NavBar floorStart={floorStart} slideIndex={slideIndex} floorNames={floorNames} onClick={(floors) => navigateToFloor(floors)}/>
			 	<div className="anglesContainer">
					<div className="carouselContainer">
						<div>
							<Arrow direction="left" onClick={() => {slideChangePrev(slideIndex, pictures);}} />
							<Scroll>
								<ImageBox pictures={pictures} index={slideIndex} onClick={(test) => turnOnLightBox(test)}/>
								<LightBox picture={lightBoxPicture} status={lightBoxStatus} onClick={() => turnOffLightBox()}/>
							</Scroll>
							<Arrow direction="right" onClick={() => {slideChangeNext(slideIndex, pictures);}} />
							</div>
						<Dots pictures={pictures} index={slideIndex} navigateToTargetSlide={navigateToTargetSlide}/>
					</div>
					<div className="textContainer">
						<div className="desktop">
							<NavBar floorStart={floorStart} slideIndex={slideIndex} floorNames={floorNames} onClick={(floors) => navigateToFloor(floors)}/>
						</div>
						<div className="desktop">
							<Scroll>
								<p className="anglesText">{text[slideIndex]}</p>
							</Scroll>
						</div>
						<div className="anglesText phone">
							<p>{text[slideIndex]}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);