import React from 'react';
import './NavBar.css';

const NavBar = ({routeChange}) => {
	return (
		<div className="navBarContainer">
			<p onClick={ routeChange.bind('', 'mapList')}>RAINBOW ANGLES</p>
		</div>
	);
}

export default NavBar;