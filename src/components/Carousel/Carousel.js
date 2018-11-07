import React, { Component } from 'react';
import { connect } from 'react-redux'
import Arrow from './Arrow';
import { nextSlide, prevSlide, toObjective, toTargetSlide, lightBoxOn, lightBoxOff } from '../../containers/actions';
import Scroll from '../Scroll/Scroll';
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
		navigateToObjective: (objectiveStart) => {dispatch(toObjective(objectiveStart))},
		navigateToTargetSlide: (targetSlide) => {dispatch(toTargetSlide(targetSlide))},
		turnOnLightBox: (lightBoxPicture) => {dispatch(lightBoxOn(lightBoxPicture))},
		turnOffLightBox: () => {dispatch(lightBoxOff())}
	}
}

class Carousel extends Component {
	render () {	

		const { pictures, slideIndex, text, objectiveStart, lightBoxStatus, lightBoxPicture, slideChangeNext, slideChangePrev, navigateToObjective, navigateToTargetSlide, turnOnLightBox, turnOffLightBox } = this.props;

		let generalUseActivate = 'objectiveNavButton ';
		let secureAreaActivate = 'objectiveNavButton ';
		let bombActivate = 'objectiveNavButton ';
		let hostageActivate = 'objectiveNavButton ';
		generalUseActivate = slideIndex < objectiveStart[0] ? generalUseActivate += ' objectiveNavButton-active' : generalUseActivate = 'objectiveNavButton ';
		secureAreaActivate = slideIndex >= objectiveStart[0] && slideIndex < objectiveStart[1] ? secureAreaActivate += ' objectiveNavButton-active ' : secureAreaActivate = 'objectiveNavButton ';
		bombActivate = slideIndex >= objectiveStart[1] && slideIndex < objectiveStart[2] ? bombActivate += ' objectiveNavButton-active ' : bombActivate = 'objectiveNavButton ';
		hostageActivate = slideIndex >= objectiveStart[2] ? hostageActivate += ' objectiveNavButton-active ' : hostageActivate = 'objectiveNavButton ';
		 return (
		 	<div>
			 	<h1> 
					{
						slideIndex < objectiveStart[0] ? 'General Use' :
						slideIndex >= objectiveStart[0] && slideIndex < objectiveStart[1] ?'Secure Area' :
			 	 		slideIndex >= objectiveStart[1] && slideIndex < objectiveStart[2] ? 'Bomb' :
			 	 		slideIndex >= objectiveStart[2] ? 'Hostage' :
			 	 		'Something is wrong'
			 	 	}
			 	</h1>
			 	<nav className="objectiveNavMobile phone">
					<li className={`generalUseSkew fullBorder ${generalUseActivate}`} onClick={() => navigateToObjective(0)} ><a>General Use</a></li>
					<li className={`zIndex1 fullBorder ${secureAreaActivate}`} onClick={() => navigateToObjective(objectiveStart[0])} ><a>Secure Area</a></li>
					<li className={`zIndex1 noBorderLeft ${bombActivate}`} onClick={() => navigateToObjective(objectiveStart[1])} ><a>Bomb</a></li>
					<li className={`hostageSkew fullBorder ${hostageActivate}`} onClick={() => navigateToObjective(objectiveStart[2])} ><a>Hostage</a></li>
				</nav>
			 	<div className="anglesContainer">
					<div className="carouselContainer">
						<div>
							<Arrow direction="left" onClick={() => slideChangePrev(slideIndex, pictures)} />
							<Scroll>
								<ImageBox pictures={pictures} index={slideIndex} onClick={(test) => turnOnLightBox(test)}/>
								<LightBox picture={lightBoxPicture} status={lightBoxStatus} onClick={() => turnOffLightBox()}/>
							</Scroll>
							<Arrow direction="right" onClick={() => slideChangeNext(slideIndex, pictures)} />
							</div>
						<Dots pictures={pictures} index={slideIndex} navigateToTargetSlide={navigateToTargetSlide}/>
					</div>
					<div className="textContainer">
						<nav className="objectiveNav desktop">
							<li className={`skewedNavButton fullBorder ${generalUseActivate}`} onClick={() => navigateToObjective(0)} ><a>General Use</a></li>
							<li className={`skewedNavButton noBorderLeft ${secureAreaActivate}`} onClick={() => navigateToObjective(objectiveStart[0])} ><a>Secure Area</a></li>
							<li className={`skewedNavButton noBorderLeft ${bombActivate}`} onClick={() => navigateToObjective(objectiveStart[1])} ><a>Bomb</a></li>
							<li className={`unskewedNavButton fullBorder ${hostageActivate}`} onClick={() => navigateToObjective(objectiveStart[2])} ><a>Hostage</a></li>
						</nav>
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