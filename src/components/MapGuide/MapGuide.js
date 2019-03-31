import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MapGuide.css';
import Carousel from "../Carousel/Carousel";
import { toTargetSlide } from '../../containers/actions';
import * as Scroll from 'react-scroll';
import {Link as scrollLink, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';



const mapStateToProps = (state) => {
  return {
    slideIndex: state.controlCarousel.slideIndex,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    navigateToTargetSlide: (targetSlide) => {dispatch(toTargetSlide(targetSlide))}
  }
}


class MapGuide extends Component {

	scrollTo(target) {
		scroller.scrollTo(target, {
			duration: 800,
			delay: 1000,
			smooth: 'easeInOut',
			offset: -72
		})

	}

	componentWillMount() {
		window.scrollTo(0,0);
		this.props.navigateToTargetSlide(0);
	}

	componentDidMount() {
		this.scrollTo('anglesHeader');
	}

	render () {
		const { slideIndex, navigateToTargetSlide, headerPicture, header, text, pictures, video, floorStart, floorNames } = this.props;

		return (
			<div>
				<div className="headerContainer" style={{background: `url(${headerPicture}) center no-repeat`, backgroundSize: 'cover'}}>
					<h1>{header.toUpperCase()}</h1>
				</div>
				<Carousel pictures={pictures} text={text} floorStart={floorStart} floorNames={floorNames}/>	
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MapGuide);