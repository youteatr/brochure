import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Slide06.css"


function Slide06() {
	const { t } = useTranslation();

  return (
		<section className="temp-section">
			<div className="temp-section__content">
			<img className="temp-img no-select"  src={"temp/Slide06/" + t("global.temp")} alt="Временная реализация" />
		</div>
	</section>
  )
}

export default Slide06
