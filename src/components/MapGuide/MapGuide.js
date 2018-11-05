import React from 'react';
import './MapGuide.css';
import Carousel from "../Carousel/Carousel";

const MapGuide = ({headerPicture, header, text, pictures, video, objectiveStart}) => {
	return (
		<div>
			<div className="headerContainer" style={{background: `url(${headerPicture}) center no-repeat`, backgroundSize: 'cover'}}>
				<h1>{header}</h1>
			</div>
			<Carousel pictures={pictures} text={text} objectiveStart={objectiveStart}/>	
		</div>
	);
}

export default MapGuide;