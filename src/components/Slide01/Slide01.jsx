import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n';
import Fresco from './Fresco/Fresco';

import '../../App.css'
import './Slide01.css'

function Slide_01() {
	const { t } = useTranslation();
	const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.
	const chooseLanguage = (e) => {
		e.preventDefault();
		i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
		setSelectedLanguage(e.target.value);
	}
	const translations = (lng) => {
		if (lng === "en") {
			return (
				<>
					<button className='no-select' value="sl" onClick={chooseLanguage}>SLV</button>
					<button className='no-select' value="ru" onClick={chooseLanguage}>RUS</button>
				</>
			)
		} else if (lng === "ru") {
			return (
				<>
					<button className='no-select' value="sl" onClick={chooseLanguage}>SLV</button>
					<button className='no-select' value="en" onClick={chooseLanguage}>ENG</button>
				</>
			)
		} else if (lng === "sl") {
			return (
				<>
					<button className='no-select' value="ru" onClick={chooseLanguage}>RUS</button>
					<button className='no-select' value="en" onClick={chooseLanguage}>ENG</button>
				</>
			)
		}
	}

	const SlideOne = () => {
		const [height, setHeight] = useState(window.innerHeight)
	  
		useEffect(() => {
		  const handleResize = () => {
			setHeight(window.innerHeight)
		  };
	  
		  window.addEventListener('resize', handleResize)
	  
		  return () => {
			window.removeEventListener('resize', handleResize)
		  };
		}, [])

		return height
	}

	return (
		<section className="slide_one" style={{height: (SlideOne() - 80*2)}}>
			<div className="container" style={{height: (SlideOne() - 80*2)}}>
				<div className="inner flex-column">
					<div className="up">
						<h1>{t("slide_1.text_1_1")}</h1>
						<h2>{t("slide_1.text_1_2")}</h2>
					</div>
					<div className="down">
						<div className="translations">
							{translations(selectedLanguage)}
						</div>
						<div className="notice">
							<h1>{t("discount")}%</h1>
							<span>{t("slide_1.text_1_3")}</span>
						</div>
					</div>
				</div>
			</div>
			<Fresco height={SlideOne()} />
		</section>
	)
}

export default Slide_01
