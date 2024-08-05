import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Slide05.css"


function Slide05() {
	const { t } = useTranslation();

  return (
	<section className="temp-section grid grid__viewports">
		<div className="grid__viewport grid__viewport--fr-1">
			<img className="temp-img no-select"  src={"temp/Slide05/" + t("temp")} alt="Временная реализация" />
		</div>
		<div className="grid__viewport grid__viewport--fr-2"></div>
	</section>
  )
}

export default Slide05
