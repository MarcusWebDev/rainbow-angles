import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import {Link as scrollLink, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll';

const scrollTo = (target) => {
	scroller.scrollTo(target, {
		duration: 800,
		delay: 0,
		smooth: 'easeInOut',
		offset: -72
	})
}

const Banner = () => {
	return (
		<div className="bannerContainer">
			<Link to="/">
				<p>RAINBOW ANGLES</p>
			</Link>
			<nav>
				<a onClick={() => scrollTo('about')}>ABOUT</a>
				<a onClick={() => scrollTo('mapListContainer')}>MAPS</a>
				<a onClick={() => scrollTo('branding')}>CONTACT</a>
			</nav>
		</div>
	);
}

export default Banner;