import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = ({resetCarousels}) => {
	return (
		<Link to="/">
			<div className="bannerContainer" onClick={() => resetCarousels(0)}>
				<p>RAINBOW ANGLES</p>
			</div>
		</Link>
	);
}

export default Banner;