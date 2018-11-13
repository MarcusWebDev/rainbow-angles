import React from 'react';
import './NavBar.css';

const NavBar = ({floorStart, slideIndex, floorNames, onClick}) => {

	const activateArray = [];

	//This block updates the activate array to only have the currently selected floor section have the 'floorNavButton-active' css class. It's then passed into the two nav creators below
	const activate = (i) => {
		if (i === 0) { //is this the first nav button? If so, is the current slide's index less than the next floor's starting slide index? If so, make that nav button have the active styling. If not, make it have the deactivated styling
			slideIndex < floorStart[0] ? activateArray.push('floorNavButton-active') : activateArray.push('floorNavButton');
		}
		else if (i === floorNames.length - 1) { //is this the last nav button? If so, is the current slide's index equal to or greater than the last floor's starting slide index? If so, make that nav button have the active styling. If not, make it have the deactivated styling
			slideIndex >= floorStart[floorStart.length - 1] ? activateArray.push('floorNavButton-active') : activateArray.push('floorNavButton');
		}
		else { //is this nav button somewhere between the first and last nav buttons? If so, is the current slide's index greater than or equal to this button's starting slide index and less than the next button's starting slide index? If so, make it have the active styling, if not make it have the deactivated styling
			slideIndex >= floorStart[i - 1] && slideIndex < floorStart[i] ? activateArray.push('floorNavButton-active') : activateArray.push('floorNavButton');
		}
	}

	const desktopNav = floorNames.map((button, i) => {
		const skew = i === floorNames.length - 1 ? 'desktopUnskewedNavButton' : 'desktopSkewedNavButton';
		const desktopBorder = i === 0 || i === floorNames.length - 1 ? ' fullBorder' : ' noBorderLeft'; 
		const navigateToSection = i === 0 ? 0 : floorStart[i - 1]; //i - 1 here because the bottom floor will always be at index 0
		activate(i); //each button reads it's index in the activateArray array and activates or deactivates based on that index's value.
		return (
			<li className={`${skew} ${desktopBorder} ${activateArray[i]}`} onClick={() => onClick(navigateToSection)} >
				<a>{floorNames[i]}</a>
			</li>
		);
	})

	const mobileNav = floorNames.map((button, i) => {
		const skew = i === 0 ? 'bottomFloorSkew' : i === floorNames.length - 1 ? 'topFloorSkew' : '';
		const mobileBorder = "fullBorder"; /*floorNames.length === 3 ? 'fullBorder' : i === floorNames.length - 2 ? ' noBorderLeft' : ' fullBorder'; */
		const navigateToSection = i === 0 ? 0 : floorStart[i - 1];
		const zIndex = i === 0 || i === floorNames.length - 1 ? '' : 'zIndex1';
		activate(i); //each button reads it's index in the activateArray array and activates or deactivates based on that index's value.
		return (
			<li className={`${skew} ${mobileBorder} ${zIndex} ${activateArray[i]}`} onClick={() => onClick(navigateToSection)} >
				<a>{floorNames[i]}</a>
			</li>
		);
	})
	return (
		<div>
			<nav className="floorNavMobile phone">
				{mobileNav}
			</nav>
			<nav className="floorNav desktop">
				{desktopNav}
			</nav>
		</div>
	);
}

export default NavBar;