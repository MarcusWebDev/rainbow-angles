import React from 'react';
import './MapGuide.css';
import Scroll from '../Scroll/Scroll';
import Carousel from "../Carousel/Carousel";

const MapGuide = ({headerPicture, header, text, pictures, video}) => {
	return (
		<div>
			<div className="headerContainer">
				<img src={headerPicture} />
				<h1>{header}</h1>
			</div>
			<div>
				<h1>Objective</h1>
				<div className="anglesContentContainer">
					<Carousel pictures={pictures}/>
					<Scroll>
						<p className="scrollText">{text}</p>
					</Scroll>
				</div>
			</div>
		</div>
	);
}

export default MapGuide;