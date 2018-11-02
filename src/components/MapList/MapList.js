import React from 'react';
import './MapList.css';
import Maps from '../Maps/Maps';

const MapList = ({routeChange}) => { //passed the routeChange function to here as a prop to change the state based off the the route specified in each onClick
	return (
		<div className="mapListContainer">
			<h1>Welcome to Rainbow Angles!</h1>
			<h3>A site featuring good angles on all competitive maps</h3>
			<h1>Current Ranked Maps</h1>
			<div className="mapList">
				<Maps onClick={() => routeChange('bank')} title="Bank" picture={require("../../images/Bank.jpg")}/>
				<Maps onClick={() => routeChange('border')} title="Border" picture={require("../../images/Border.jpg")}/>
				<Maps onClick={() => routeChange('clubhouse')} title="Clubhouse" picture={require("../../images/Clubhouse.jpg")}/>
				<Maps onClick={() => routeChange('hereford')} title="Hereford" picture={require("../../images/Hereford.jpg")}/>
				<Maps onClick={() => routeChange('skyscraper')} title="Skyscraper" picture={require("../../images/Skyscraper.png")}/>
				<Maps onClick={() => routeChange('themePark')} title="Theme Park" picture={require("../../images/ThemePark.png")}/>
				<Maps onClick={() => routeChange('villa')} title="Villa" picture={require("../../images/Villa.jpg")}/>
				<Maps onClick={() => routeChange('bank')} title="Bank" picture={require("../../images/Bank.jpg")}/>
				<Maps onClick={() => routeChange('bank')} title="Bank" picture={require("../../images/Bank.jpg")}/>
				<Maps onClick={() => routeChange('bank')} title="Bank" picture={require("../../images/Bank.jpg")}/>
				<Maps onClick={() => routeChange('bank')} title="Bank" picture={require("../../images/Bank.jpg")}/>
				<Maps onClick={() => routeChange('bank')} title="Bank" picture={require("../../images/Bank.jpg")}/>
			</div>
		</div>
	);
}

export default MapList;