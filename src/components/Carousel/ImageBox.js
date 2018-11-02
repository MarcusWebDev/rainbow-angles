import React from 'react';
import './ImageBox.css'

const ImageBox = ({pictures, index}) => {
	console.log(index);
	const imageArray = pictures.map((picture, i) => {
		return (
			<img key={i} src={pictures[i]} />
		);
	})

	return (
		<div className="imageContainer">
			{imageArray}
		</div>
	);
}

export default ImageBox;