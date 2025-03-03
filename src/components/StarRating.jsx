import React, { useState } from 'react'
import Star from './Star';

const containerStyle = {
	display: 'flex',
	alightItems: 'center',
	gap: '16px'
};

const starContainerStyle = {
	display: 'flex'
};

const StarRating = ({
	maxRating = 5, 
	color= '#fcc491', 
	size='48',className='',
	messages = [],
	defaultRating = 0,
	onSetRating
}) => {
	
	const [rating, setRating] = useState(defaultRating);
	const [tempRating, setTempRating] = useState(0);
	
	const textStyle = {
		color,
		fontSize: `${size / 1.5}px`,
		lineHeight: '1',
		margin: '0'
	}
	
	const handleRating = (rating) => {
		setRating(rating);
		onSetRating(rating);
	};
	
	const hoverInHandler = (rating) => {
		setTempRating(rating)
	};
	
	const hoverOutHandler = (rating) => {
		setTempRating(rating)
	};


  return (
	<div style={containerStyle} className={className}>
		<div style={starContainerStyle}>
			{Array.from({length: maxRating}, (_, i) => 
			<Star full={tempRating ? tempRating >= i + 1 : rating >= i + 1} 
			key={i} 
			color={color}
			size={size}
			onRate={() => handleRating(i + 1)}
			onHoverIn={() => hoverInHandler(i + 1)}
			onHoverOut={() => hoverOutHandler(0)}
			/>)}
		</div>
		<p style={textStyle}>{messages.length === maxRating ? messages[tempRating ? tempRating -1 : rating - 1] :tempRating || rating || ''}</p>
	</div>
  )
}

export default StarRating