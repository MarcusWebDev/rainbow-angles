import React from 'react';
import './Banner.css';

const Banner = ({routeChange}) => {
	return (
		<div className="navBarContainer" onClick={() => routeChange('mapList')}>
			<img src={require('../../images/logo.png')} />
			<p>RAINBOW ANGLES</p>
		</div>
	);
}

export default Banner;