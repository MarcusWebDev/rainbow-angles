import React from 'react';
import './MapGuide.css';
import Carousel from "../Carousel/Carousel";

const MapGuide = ({headerPicture, header, text, pictures, video, floorStart, floorNames}) => {
	return (
		<div>
			<div className="headerContainer" style={{background: `url(${headerPicture}) center no-repeat`, backgroundSize: 'cover'}}>
				<h1>{header.toUpperCase()}</h1>
			</div>
			<Carousel pictures={pictures} text={text} floorStart={floorStart} floorNames={floorNames}/>	
		</div>
	);
}

export default MapGuide;