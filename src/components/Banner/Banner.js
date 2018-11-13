import React from 'react';
import './Banner.css';

const Banner = ({routeChange, resetCarousels}) => {
	return (
		<div className="navBarContainer" onClick={() => {
			routeChange('mapList');
			resetCarousels(0);
		}}>
			<img src={require('../../images/logo.png')} />
			<p>RAINBOW ANGLES</p>
		</div>
	);
}

export default Banner;