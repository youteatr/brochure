import React from 'react'
import { useTranslation } from 'react-i18next'

import "./Slide02.css"

function Slide02(props) {
	const { t } = useTranslation();

	return (
		<section id={props.id} className="temp-section">
			<div className="temp-section__content">
				<img className="temp-img no-select"  src={"temp/Slide02/" + t("global.temp")} alt="Временная реализация" />
			</div>
		</section>
	)
}

export default Slide02
