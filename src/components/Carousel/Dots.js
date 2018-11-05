import React from 'react';
import './Dots.css';

const Dots = ({pictures, index, navigateToTargetSlide}) => {
	let className = 'dot';
	const dotsArray = pictures.map((picture, i) => {
		index === i ? className += ' dot-active' : className = 'dot';
		return (
			<div className={className} key={i} onClick={() => navigateToTargetSlide(i)}>
			</div>
		);
	})
	return (
		<div className="dotsContainer">
			{dotsArray}
		</div>
	);
}

export default Dots;