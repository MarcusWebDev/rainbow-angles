import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<Link to="/">
			<div className="bannerContainer">
				<p>RAINBOW ANGLES</p>
			</div>
		</Link>
	);
}

export default Banner;