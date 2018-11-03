import React, { Component, getState } from 'react';
import { connect } from 'react-redux'
import Arrow from './Arrow';
import nextSlide from '../../containers/actions';
import prevSlide from '../../containers/actions';
import ImageBox from './ImageBox';
import './Carousel.css';

const mapStateToProps = (state) => {
	return {
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
		console.log(slideChangeNext);
		 return (
			<div className="carouselContainer">
				<Arrow direction="left" onClick={() => slideChangePrev(0)} />
				<ImageBox pictures={pictures} index={slideIndex} /> 
				<Arrow direction="right" onClick={() => slideChangeNext(0)} />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);