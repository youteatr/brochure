/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import './FormPreliminary.css'

const content = (content) => css`
  &.req::after {
    content: '${content}';
  }
`

function FormPreliminary(props) {
	const
		{ t } = useTranslation(),
		navigate = useNavigate(),
		[errors, setErrors] = useState({
			parentName: false,
			email: false,
		})

	const
		[parentName, setParentName] = useState(''),
		[childName, setChildName] = useState('')

	const send = () => {
		let res = true

		const newErrors = {
			parentName: false,
			email: false,
			phone: false,
			childName: false,
			childAge: false,
		};

		if (parentName.length < 2) {
			newErrors.parentName = true;
			res = false
		} else {
			newErrors.parentName = false;
		}
		if (childName.length < 2) {
			newErrors.childName = true;
			res = false
		} else {
			newErrors.childName = false;
		}

		if (res) {
			navigate('/enroll#form', { state: { parentName: parentName, childName: childName } })
		}

		setErrors(newErrors)

	}

	return (
		<div className={`form-preliminary-wrapper form-preliminary_${props.type}`}>
			<div className='form-preliminary'>
				<form className="form-preliminary__content" onSubmit={(e) => { e.preventDefault(); send() }}>
					<div className="form-preliminary__headline">
						<span className="text text_size_huge form-preliminary__title">{t("components.form.headline.title")}</span>
					</div>
					<div className="form-preliminary__inputs">
						<label className={`form-preliminary__label ${errors.parentName ? 'req' : ''}`} css={content(t("components.form.labels.inputs.parent-name.tips.empty.value"))} id="for-parent-name">
							<div className="form-preliminary__label-content">
								<input
									value={parentName}
									onChange={(e) => setParentName(e.target.value)}
									type="text"

									id="parent-name"
									className="form-preliminary__input text text_size_large"

									name="parent-name"
									placeholder={t("components.form.labels.inputs.parent-name.placeholder")}

									minLength="1"
									maxLength="20"
								/>
							</div>
						</label>
						<label className={`form-preliminary__label ${errors.childName ? 'req' : ''}`} css={content(t("components.form.labels.inputs.child-name.tips.empty.value"))} id="for-child-name">
							<div className="form-preliminary__label-content">
								<input
									value={childName}
									onChange={(e) => setChildName(e.target.value)}
									type="text"

									id="child-name"
										className="form-preliminary__input text text_size_large"

									name="child-name"
									placeholder={t("components.form.labels.inputs.child-name.placeholder")}

									minLength="1"
									maxLength="20"
								/>
							</div>
						</label>
					</div>
					<div className="form-preliminary__submit">
						<button className="form-preliminary__button text text_color_m-one text_size_large text_weight_medium no-select" type="submit">{t("components.form.submit.button")}</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default FormPreliminary
