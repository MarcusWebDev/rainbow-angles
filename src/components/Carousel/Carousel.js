import React, { Component } from 'react';
import { connect } from 'react-redux'
import Arrow from './Arrow';
import { nextSlide, prevSlide } from '../../containers/actions';
import Scroll from '../Scroll/Scroll';
import ImageBox from './ImageBox';
import './Carousel.css';

const mapStateToProps = (state) => {
	return {
		slides: state.controlCarousel.slides,
		slideIndex: state.controlCarousel.slideIndex
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		slideChangeNext: (slideIndex, pictures) => {dispatch(nextSlide(slideIndex, pictures))},
		slideChangePrev: (slideIndex, pictures) => {dispatch(prevSlide(slideIndex, pictures))}
	}
}

class Carousel extends Component {
	render () {
		const { slideChangeNext, slideChangePrev, pictures, slideIndex, text } = this.props;
		 return (
		 	<div>
			 	<h1>Objective</h1>
			 	<div className="anglesContainer">
					<div className="carouselContainer">
						<Arrow direction="left" onClick={() => slideChangePrev(slideIndex, pictures)} />
						<Scroll>
							<ImageBox pictures={pictures} index={slideIndex} /> 
						</Scroll>
						<Arrow direction="right" onClick={() => slideChangeNext(slideIndex, pictures)} />
					</div>
					<Scroll>
						<p className="scrollText">{text}</p>
					</Scroll>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);