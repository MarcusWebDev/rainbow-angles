import React from 'react';
import './MapList.css';

const MapList = ({routeChange}) => { //passed the routeChange function to here as a prop to change the state based off the the route specified in each onClick
	return (
		<div className="mapListContainer">
			<h1>Welcome to Rainbow Angles!</h1>
			<h3>A site featuring good angles on all competitive maps</h3>
			<h1>Current Ranked Maps</h1>
			<div className="mapList">
				<img onClick={routeChange.bind('', 'bank')} src={require("../../images/Bank.jpg")}></img>
				<img src={require("../../images/Border.jpg")}></img>
				<img src={require("../../images/Clubhouse.jpg")}></img>
				<img src={require("../../images/Hereford.jpg")}></img>
				<img src={require("../../images/Skyscraper.png")}></img>
				<img src={require("../../images/ThemePark.png")}></img>
				<img src={require("../../images/Villa.jpg")}></img>
				<img src={require("../../images/Bank.jpg")}></img>
				<img src={require("../../images/Bank.jpg")}></img>
				<img src={require("../../images/Bank.jpg")}></img>
				<img src={require("../../images/Bank.jpg")}></img>
				<img src={require("../../images/Bank.jpg")}></img>
			</div>
		</div>
	);
}

export default MapList;