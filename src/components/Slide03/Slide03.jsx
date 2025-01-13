import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Slide03.css"


function Slide03(props) {
	const { t } = useTranslation();

  return (
		<section id={props.id} className="temp-section">
			<div className="temp-section__content">
			<img className="temp-img no-select"  src={"temp/Slide03/" + t("global.temp")} alt="Временная реализация" />
		</div>
	</section>
  )
}

export default Slide03
