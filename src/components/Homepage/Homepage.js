import React from 'react';
import './Homepage.css';
import Maps from '../Maps/Maps';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {scrollTo} from '../Banner/Banner';

const responsive = {
	all : {
		breakpoint: { max: 4000, min: 0 },
		items: 1
	}
}

const Homepage = () => { 
	window.scrollTo(0,0);
	return (
		<div className="homepageContainer">
			<div className="multiCarouselContainer">
				<Carousel className="multiCarousel" responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={7000}>
					<div className="multiCarouselImage" style={{background: `url(${require("../../images/Bank.jpg")}) center no-repeat`, backgroundSize: 'cover'}}/>
					<div className="multiCarouselImage" style={{background: `url(${require("../../images/Border.jpg")}) center no-repeat`, backgroundSize: 'cover'}}/>
					<div className="multiCarouselImage" style={{background: `url(${require("../../images/Chalet.jpg")}) center no-repeat`, backgroundSize: 'cover'}}/>
					<div className="multiCarouselImage" style={{background: `url(${require("../../images/ClubHouse.jpg")}) center no-repeat`, backgroundSize: 'cover'}}/>
					<div className="multiCarouselImage" style={{background: `url(${require("../../images/Coastline.jpg")}) center no-repeat`, backgroundSize: 'cover'}}/>
					<div className="multiCarouselImage" style={{background: `url(${require("../../images/Consulate.jpg")}) center no-repeat`, backgroundSize: 'cover'}}/>
					<div className="multiCarouselImage" style={{background: `url(${require("../../images/Hereford.jpg")}) center no-repeat`, backgroundSize: 'cover'}}/>
					<div className="multiCarouselImage" style={{background: `url(${require("../../images/KafeDostoyevsky.jpg")}) center no-repeat`, backgroundSize: 'cover'}}/>
					<div className="multiCarouselImage" style={{background: `url(${require("../../images/Oregon.jpg")}) center no-repeat`, backgroundSize: 'cover'}}/>
					<div className="multiCarouselImage" style={{background: `url(${require("../../images/Skyscraper.jpg")}) center no-repeat`, backgroundSize: 'cover'}}/>
					<div className="multiCarouselImage" style={{background: `url(${require("../../images/ThemePark.jpg")}) center no-repeat`, backgroundSize: 'cover'}}/>
					<div className="multiCarouselImage" style={{background: `url(${require("../../images/Villa.jpg")}) center no-repeat`, backgroundSize: 'cover'}}/>
				</Carousel>
				<h1 className="videoText">GAIN THE EDGE ON YOUR OPPONENTS</h1>
			</div>
			<div className="aboutText">
				<h2>ABOUT</h2>
				<p>Rainbow Angles is a website designed to feature angles you can create and hold to watch over vital parts of the maps and catch your opponents off guard.</p>
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