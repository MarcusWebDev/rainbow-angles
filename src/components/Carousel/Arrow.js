import React from 'react';
import './Arrow.css';

const Arrow = ({direction, onClick}) => {
	return (
		<div className={`slide-arrow ${direction}`} onClick={onClick}>
		</div>
	);
}

export default Arrow;