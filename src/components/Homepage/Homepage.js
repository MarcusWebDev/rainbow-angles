import React from 'react';
import './Homepage.css';
import Maps from '../Maps/Maps';
import { Link } from 'react-router-dom';
import {scrollTo} from '../Banner/Banner';

const Homepage = () => { 
	window.scrollTo(0,0);
	return (
		<div className="homepageContainer">
			<div className="webmContainer">
				<video className="bgVideo" preload="true" autoPlay playsinline muted loop data-flashblockwhitelisted="true" poster="https://ubistatic2-a.akamaihd.net/gamesites/rainbow6/headers/r6-header-burnthorizon.jpg">
					<source type="video/webm" src="https://ubistatic2-a.akamaihd.net/gamesites/rainbow6/headers/r6-header-burnthorizon.webm"/>
					<source type="video/mp4" src="https://ubistatic2-a.akamaihd.net/gamesites/rainbow6/headers/r6-header-burnthorizon.mp4"/>
				</video>
				<h1 className="videoText">GAIN THE EDGE ON YOUR OPPONENTS</h1>
			</div>
			<div className="about">
				<div className="aboutText">
					<h2>ABOUT</h2>
					<p>Rainbow Angles is a website designed to feature angles you can create and hold to watch over vital parts of the maps and catch your opponents off guard.</p>
				</div>
				<div className="operatorPictureContainer">
					<img className="operator" src="https://ubistatic19-a.akamaihd.net/resource/en-us/game/rainbow6/siege-v3/r6-operator-kapkan_229908.png"/>
				</div>
			</div>
			<div className="mapListContainer">
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
			<div className="branding">
				<h1>MarcusWebDev</h1>
				<ul>
					<a href="mailto:RainbowAnglesOfficial@gmail.com">Contact</a>
					<a href="https://github.com/MarcusWebDev">Github</a>
				</ul>
				<a className="backToTop" onClick={() => scrollTo('bgVideo')}>Back to the Top</a>
			</div>
		</div>
	);
}

export default Homepage;