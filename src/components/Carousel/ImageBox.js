import React from 'react';
import LightBox from './LightBox';
import './ImageBox.css';

const ImageBox = ({pictures, index, onClick}) => {
	console.log(pictures);
	console.log(index); //index is what is becoming undefined
	const imageArray = pictures[index].map((picture, i) => {
		return (
			<img key={i} src={pictures[index][i]} onClick={() => onClick(pictures[index][i])} />
		);
	})

	return (
		<div className="imageContainer">
			{imageArray}
			
		</div>
	);
}

export default ImageBox;