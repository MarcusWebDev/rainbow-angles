import React from 'react';
import LightBox from './LightBox';
import './ImageBox.css';

const ImageBox = ({pictures, index, onClick, onLoad, onError}) => {
	const imageArray = pictures[index].map((picture, i) => {
		return (
			<img key={i} src={pictures[index][i]} onClick={() => onClick(pictures[index][i])} onLoad={onLoad} onError={onError}/>
		);
	})

	return (
		<div className="imageContainer" >
			{imageArray}
		</div>
	);
}

export default ImageBox;