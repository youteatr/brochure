import React from 'react'

import './Fresco.css'

import frescoImage from './img/frescoImage.png'
import frescoVector from './img/frescoVector.svg'
import frescoText from './img/frescoText.svg'

function Fresco() {
	return (
		<figure className='fresco no-select'>
			<img draggable="false" className='mask no-select' src={frescoImage} alt="fresco" />
			<img draggable="false" className='text no-select' src={frescoText} alt="fresco_svg"/>
			<img draggable="false" className='vector no-select' src={frescoVector} alt="fresco_svg"/>
		</figure>
	)
}

export default Fresco
