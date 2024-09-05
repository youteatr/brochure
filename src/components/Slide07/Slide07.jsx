import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Slide07.css"


function Slide07(props) {
	const { t } = useTranslation();

  return (
		<section id={props.id} className="temp-section">
			<div className="temp-section__content">
			<img className="temp-img no-select"  src={"temp/Slide07/" + t("global.temp")} alt="Временная реализация" />
		</div>
	</section>
  )
}

export default Slide07
