import React from 'react';
import './LightBox.css';

const LightBox = ({pictures, index, status, onClick}) => {
	let className = 'lightBoxContainer';
	status === 'on' ? className += 'lightBoxContainer-active' : className = 'lightBoxContainer';

	const lightBoxArray = pictures.map((picture, i) => {
		return (
			<div className="lightBoxPicture" style={{background: `url(${pictures[index][i]}) center no-repeat`, backgroundSize: 'cover'}}>
			</div>
		);
	})

	return (
		<div className={className} onClick={onClick}>
			{lightBoxArray}
		</div>
	);
}

export default LightBox;