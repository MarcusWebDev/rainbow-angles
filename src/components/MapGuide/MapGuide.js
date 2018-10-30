import React from 'react';
import './MapGuide.css';

const MapGuide = ({headerPicture, header, text, pictures, video}) => {
	return (
		<div>
			<div className="headerContainer">
				<img src={headerPicture} />
				<h1>{header}</h1>
			</div>
			<div className="anglesContainer">
				<h1>Bomb</h1>
				<p>{text[1]}</p>
				<h1>Secure Area</h1>
				<h1>Hostage</h1>
			</div>
		</div>
	);
}

export default MapGuide;