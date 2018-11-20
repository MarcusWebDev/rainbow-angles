import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MapGuide.css';
import Carousel from "../Carousel/Carousel";
import { toTargetSlide } from '../../containers/actions';

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
	
	componentWillMount() {
		this.props.navigateToTargetSlide(0);
	}

	render () {
		const { slideIndex, navigateToTargetSlide, headerPicture, header, text, pictures, video, floorStart, floorNames } = this.props;
		console.log(slideIndex);
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