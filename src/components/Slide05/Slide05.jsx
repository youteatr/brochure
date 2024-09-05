import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Slide05.css"


function Slide05(props) {
	const { t } = useTranslation();

  return (
		<section id={props.id} className="temp-section">
			<div className="temp-section__content">
			<img className="temp-img no-select"  src={"temp/Slide05/" + t("global.temp")} alt="Временная реализация" />
		</div>
	</section>
  )
}

export default Slide05
