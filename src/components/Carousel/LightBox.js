import React from 'react';
import './LightBox.css';

const LightBox = ({picture, status, onClick}) => {
	let className = 'lightBoxContainer';
	status === 'on' ? className += ' lightBoxContainer-active' : className = 'lightBoxContainer';

	return (
		<div className={className} onClick={onClick}>
			<div className="lightBoxPictureContainer">
				<img className="lightBoxPicture" src={picture}/>
			</div>
		</div>
	);
}


export default LightBox;