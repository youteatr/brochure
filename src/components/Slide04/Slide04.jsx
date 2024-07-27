import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Slide04.css"


function Slide04() {
	const { t } = useTranslation();

  return (
	<section className="temp-section grid grid__viewports">
		<div className="grid__viewport grid__viewport--fr-1">
			<img className="temp-img"  src={"temp/Slide04/" + t("temp")} alt="Временная реализация" />
		</div>
		<div className="grid__viewport grid__viewport--fr-2"></div>
	</section>
  )
}

export default Slide04
