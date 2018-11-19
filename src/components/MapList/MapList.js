import React from 'react';
import './MapList.css';
import Maps from '../Maps/Maps';
import { Link } from 'react-router-dom';

const MapList = ({routeChange}) => { //passed the routeChange function to here as a prop to change the state based off the the route specified in each onClick
	return (
		<div className="mapListContainer">
			<h1 className="welcome">Welcome to Rainbow Angles!</h1>
			<img className="logo" src={require('../../images/logo.png')} />
			<p>A site featuring angles that you can hold on all competitive maps of Rainbowsix Siege!</p>
			<p className="instructions">Click on any ranked map listed below and navigate through a carousel of angles for that map! The first picture in each carousel is the angle itself, and the rest of the pictures provide context for that angle. If you need to come back to the map list, just click on the banner at the top.</p>
			<h1>Current Ranked Maps</h1>
			<div className="mapList">
				<Link to="/bank/">
					<Maps title="Bank" picture={require("../../images/Bank.jpg")}/>
				</Link>
				<Link to="/border/">
					<Maps title="Border" picture={require("../../images/Border.jpg")}/>
				</Link>
				<Link to="/chalet/">
					<Maps title="Chalet" picture={require("../../images/Chalet.jpg")}/>
				</Link>
				<Link to="/club_house/">
					<Maps title="Club House" picture={require("../../images/ClubHouse.jpg")}/>
				</Link>
				<Link to="/coastline/">
					<Maps title="Coastline" picture={require("../../images/Coastline.jpg")}/>
				</Link>
				<Link to="/consulate/">
					<Maps title="Consulate" picture={require("../../images/Consulate.jpg")}/>
				</Link>
				<Link to="/hereford/">
					<Maps title="Hereford" picture={require("../../images/Hereford.jpg")}/>
				</Link>
				<Link to="/kafe_dostoyevsky/">
					<Maps title="Kafe Dostoyevsky" picture={require("../../images/KafeDostoyevsky.jpg")}/>
				</Link>
				<Link to="/oregon/">
					<Maps title="Oregon" picture={require("../../images/Oregon.jpg")}/>
				</Link>
				<Link to="/skyscraper/">
					<Maps title="Skyscraper" picture={require("../../images/Skyscraper.jpg")}/>
				</Link>
				<Link to="/theme_park/">
					<Maps title="Theme Park" picture={require("../../images/ThemePark.jpg")}/>
				</Link>
				<Link to="/villa/">
					<Maps title="Villa" picture={require("../../images/Villa.jpg")}/>
				</Link>
			</div>
		</div>
	);
}

export default MapList;