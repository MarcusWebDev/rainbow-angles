import React from 'react';
import './LightBox.css';

const LightBox = ({picture, status, onClick}) => {
	console.log(onClick)
	let className = 'lightBoxContainer';
	status === 'on' ? className += ' lightBoxContainer-active' : className = 'lightBoxContainer';

	return (
		<div className={className} onClick={onClick}>
			<div className="lightBoxPictureContainer">
				<div className="lightBoxPicture" style={{background: `url(${picture}) center no-repeat`, backgroundSize: 'cover'}}>
				</div>
			</div>
		</div>
	);
}


export default LightBox;