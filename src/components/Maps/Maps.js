import React from 'react';
import './Maps.css';

const Maps = ({onClick, title, picture}) => {
	return (
		<div onClick={onClick} className="map">
			<img src={picture} />
			<p>{title}</p>
		</div>
	);
}

export default Maps;