import React from 'react';
import './MapList.css';
import Maps from '../Maps/Maps';

const MapList = ({routeChange}) => { //passed the routeChange function to here as a prop to change the state based off the the route specified in each onClick
	return (
		<div className="mapListContainer">
			<h1>Welcome to Rainbow Angles!</h1>
			<h3>A site featuring good angles on all competitive maps of Rainbowsix Siege!</h3>
			<h1>Current Ranked Maps</h1>
			<div className="mapList">
				<Maps onClick={() => routeChange('bank')} title="Bank" picture={require("../../images/Bank.jpg")}/>
				<Maps onClick={() => routeChange('border')} title="Border" picture={require("../../images/Border.jpg")}/>
				<Maps onClick={() => routeChange('chalet')} title="Chalet" picture={require("../../images/Chalet.jpg")}/>
				<Maps onClick={() => routeChange('clubHouse')} title="Club House" picture={require("../../images/ClubHouse.jpg")}/>
				<Maps onClick={() => routeChange('coastline')} title="Coastline" picture={require("../../images/Coastline.jpg")}/>
				<Maps onClick={() => routeChange('consulate')} title="Consulate" picture={require("../../images/Consulate.jpg")}/>
				<Maps onClick={() => routeChange('hereford')} title="Hereford" picture={require("../../images/Hereford.jpg")}/>
				<Maps onClick={() => routeChange('kafeDostoyevsky')} title="Kafe Dostoyevsky" picture={require("../../images/KafeDostoyevsky.jpg")}/>
				<Maps onClick={() => routeChange('oregon')} title="Oregon" picture={require("../../images/Oregon.jpg")}/>
				<Maps onClick={() => routeChange('skyscraper')} title="Skyscraper" picture={require("../../images/Skyscraper.jpg")}/>
				<Maps onClick={() => routeChange('themePark')} title="Theme Park" picture={require("../../images/ThemePark.jpg")}/>
				<Maps onClick={() => routeChange('villa')} title="Villa" picture={require("../../images/Villa.jpg")}/>
			</div>
		</div>
	);
}

export default MapList;