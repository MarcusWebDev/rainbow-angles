import React from 'react';
import './Banner.css';

const Banner = ({routeChange, resetCarousels}) => {
	return (
		<div className="bannerContainer" onClick={() => {
			routeChange('mapList');
			resetCarousels(0);
		}}>
			<p>RAINBOW ANGLES</p>
		</div>
	);
}

export default Banner;