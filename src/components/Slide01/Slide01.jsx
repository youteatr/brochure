import React, { useState } from 'react'
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

	return (
		<section className="start selection_inverse">
			<div className="start-wrapper container container_long">
				<div className="start__content">
					<div className="start__header">
						<div className="start__title">
							<h1 className='text text_color_m-one heading_one'>{t("components.slide-1.header.title")}</h1>
						</div>
						<div className="start__subtitle">
							<span className='text text_color_m-one text_size_huge'>{t("components.slide-1.header.subtitle", { childAgeMin: t('global.child-age-min'), childAgeMax: t('global.child-age-max') })}</span>
						</div>
					</div>
					<div className="start__footer">
						<div className="translations">
							{translations(selectedLanguage)}
						</div>
						{/* <div className="start__notice">
							<span className='text text_size_xxxlarge text_color_m-one'>{t("components.slide-1.footer.notice")}</span>
						</div> */}
					</div>
				</div>
			</div>
			<Fresco/>
		</section>
	)
}

export default Slide_01
