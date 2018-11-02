import React, { Component } from 'react';
import { connect } from 'react-redux'
import Arrow from './Arrow';
import nextSlide from '../../containers/actions';
import prevSlide from '../../containers/actions';
import ImageBox from './ImageBox';
import './Carousel.css';

const mapStateToProps = (state) => {
	console.log(state);
	return {
		slides: state.controlCarousel.slides,
		slideIndex: state.controlCarousel.slideIndex
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		slideChangeNext: (slideIndex) => {dispatch(nextSlide(slideIndex))},
		slideChangePrev: (slideIndex) => {dispatch(prevSlide(slideIndex))}
	}
}

class Carousel extends Component {
	render () {
		const { slideChangeNext, slideChangePrev, pictures, slideIndex } = this.props;
		 return (
			<div className="carouselContainer">
			<Arrow direction="left" onClick={() => slideChangePrev(slideIndex)} />
			<ImageBox pictures={pictures} index={slideIndex} /> 
			<Arrow direction="right" onClick={() => slideChangeNext(slideIndex)} />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);