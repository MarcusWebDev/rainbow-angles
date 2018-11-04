import React from 'react';
import './MapGuide.css';
import Carousel from "../Carousel/Carousel";

const MapGuide = ({headerPicture, header, text, pictures, video}) => {
	return (
		<div>
			<div className="headerContainer">
				<img src={headerPicture} />
				<h1>{header}</h1>
			</div>
			<Carousel pictures={pictures} text={text}/>	
		</div>
	);
}

export default MapGuide;