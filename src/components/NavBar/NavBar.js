import React from 'react';
import './NavBar.css';

const NavBar = ({routeChange}) => {
	return (
		<div className="navBarContainer" onClick={() => routeChange('mapList')}>
			<img src={require('../../images/logo.png')} />
			<p>RAINBOW ANGLES</p>
		</div>
	);
}

export default NavBar;