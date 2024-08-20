import React from 'react'
import { useTranslation } from 'react-i18next'

// props :: name, type, placeholder, minLength, maxLength
function __input(props) {
	const { t } = useTranslation();

	return (
		<label className="form__label" id={`for-${props.name}`}>
			<input
				ref={props.ref}
				type={props.type}

				id={props.name}
				className="form__input"

				name={props.name}
				placeholder={t(props.placeholder)}

				minLength={props.minLength}
				maxLength={props.maxLength}
			/>
		</label>
	)
}

export default __input
