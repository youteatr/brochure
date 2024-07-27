import React from 'react'
import { useTranslation } from 'react-i18next'
import "./Slide07.css"


function Slide07() {
	const { t } = useTranslation();

  return (
	<section className="temp-section grid grid__viewports">
		<div className="grid__viewport grid__viewport--fr-1">
			<img className="temp-img"  src={"temp/Slide07/" + t("temp")} alt="Временная реализация" />
		</div>
		<div className="grid__viewport grid__viewport--fr-2"></div>
	</section>
  )
}

export default Slide07
