/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import "./Form.css"

const content = (content) => css`
  &.req::after {
    content: '${content}';
  }
`

function Form(props) {
	const { t, i18n } = useTranslation();
	const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)
	const location = useLocation();
	const navigate = useNavigate()
	const [errors, setErrors] = useState({
		parentName: false,
		email: false,
		phone: false,
		childName: false,
		childAge: false,
	});

	useEffect(() => {
		if (props.lang) {
		  i18n.changeLanguage(props.lang);
		  setSelectedLanguage(props.lang);
		}
	}, [props.lang, i18n]);
	
	useEffect(() => {
		const handleLanguageChange = () => {
		  setSelectedLanguage(i18n.language);
		};
		i18n.on('languageChanged', handleLanguageChange);
		return () => {
		  i18n.off('languageChanged', handleLanguageChange);
		};
	}, [i18n]);
	
	const chooseLanguage = (e) => {
		e.preventDefault()
		i18n.changeLanguage(e.target.value) // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
		setSelectedLanguage(e.target.value)
	}
	const translations = (lng) => {
		if (lng === "en") {
			return (
				<>
					<button className='language__button text text_opacity_fifty text_transform_uppercase text_weight_medium no-select' value="sl" onClick={chooseLanguage}>SLV</button>
					<span className='text text_opacity_fifty text_transform_uppercase text_weight_medium text_line-height_120p no-select'>|</span>
					<button className='language__button text text_opacity_fifty text_transform_uppercase text_weight_medium no-select' value="ru" onClick={chooseLanguage}>RUS</button>
				</>
			)
		} else if (lng === "ru") {
			return (
				<>
					<button className='language__button text text_opacity_fifty text_transform_uppercase text_weight_medium no-select' value="sl" onClick={chooseLanguage}>SLV</button>
					<span className='text text_opacity_fifty text_transform_uppercase text_weight_medium text_line-height_120p no-select'>|</span>
					<button className='language__button text text_opacity_fifty text_transform_uppercase text_weight_medium no-select' value="en" onClick={chooseLanguage}>ENG</button>
				</>
			)
		} else if (lng === "sl") {
			return (
				<>
					<button className='language__button text text_opacity_fifty text_transform_uppercase text_weight_medium no-select' value="ru" onClick={chooseLanguage}>RUS</button>
					<span className='text text_opacity_fifty text_transform_uppercase text_weight_medium text_line-height_120p no-select'>|</span>
					<button className='language__button text text_opacity_fifty text_transform_uppercase text_weight_medium no-select' value="en" onClick={chooseLanguage}>ENG</button>
				</>
			)
		}
	}

	const
		telegramBotToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN,
		telegramChatId = process.env.REACT_APP_TELEGRAM_CHAT_ID,
		url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?parse_mode=Markdown`,
		
		[parentName, setParentName] = useState(''),
		[childName, setChildName] = useState(''),
		[email, setEmail] = useState(''),
		[phone, setPhone] = useState(''),
		[childAge, setChildAge] = useState(''),

		[directionOne, setDirectionOne] = useState(false), // TRUE by default for at least one selected
		[directionTwo, setDirectionTwo] = useState(false),
		[directionThree, setDirectionThree] = useState(false)

	useEffect(() => {
		if (location.state) {
				setParentName(location.state.parentName || '');
				setChildName(location.state.childName || '');
		}
	}, [location.state]);

	const send = () => {

		let c = fullFormMode()

		if (c) {
			let id = generateId();
			let now = generateNow();

			let directions = []
			if (directionOne && directionTwo && directionThree) {
				directions.push("Полный курс")
			} else {
				if(childAge > 9) {
					if (directionTwo) {
						directions.push(`\n - Давида \`(Театральное пение, Мюзикл, Вокал)\``)
					}
				} else {
					if (directionOne) {
						directions.push(`\n - Уршулу \`(Актерское мастерство, Сценическое движение, Сценическая речь)\``)
					}
					if (directionTwo) {
						directions.push(`\n - Давида \`(Театральное пение, Мюзикл, Вокал)\``)
					}
					if (directionThree) {
						directions.push(`\n - Марию \`(Кукольный театр, Кукольная анимация голоса и тела)\``)
					}
				}
			}

			let message =
				`
*ЗАПИСЬ НА КУРС от ${now}*

*Имя родителя:* \`${parentName}\`
*E-Mail:* \`${email}\`
*Телефон:* \`${phone}\`
*Имя ребёнка:* \`${childName}\`
*Возраст ребёнка:* \`${childAge}\`

*Запись на:* ${directions}

ID этой записи: \`${id}\`
				`

				fetch(url, {
					method: 'POST',
					headers: {
					  'Content-Type': 'application/json',
					},
					body: JSON.stringify({
					  chat_id: telegramChatId,
					  text: message,
					}),
				  })
				  .then(response => response.json())
				  .then(data => {
					// console.log('Success:', data);
				  })
				  .catch((error) => {
					// console.error('Error:', error);
				  });
				  document.querySelector(".success").classList.add("ok")
				  setTimeout(() => {
						window.location.reload();
				  }, 5000);
					navigate('#form')
		}

	}

	const fullFormMode = () => {
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

			navigate('#form__labels')
		} else {
			newErrors.parentName = false;
		}
		if (emailTest()) {
			newErrors.email = true;
			res = false

			navigate('#form__labels')
		} else {
			newErrors.email = false;
		}

		if (checkPhone()) {
			newErrors.phone = true;
			res = false

			navigate('#form__labels')
		} else {
			newErrors.phone = false;
		}

		if (childName.length < 2) {
			newErrors.childName = true;
			res = false

			navigate('#form__labels')
		} else {
			newErrors.childName = false;
		}

		if (childAge < 1) {
			newErrors.childAge = true;
			res = false

			navigate('#form__labels')
		} else {
			newErrors.childAge = false;
		}
		
		if (!(childAge >= t('global.child-age-min') && childAge <= t('global.child-age-max'))) {
			newErrors.childAge = true;
			res = false
		} else {
			newErrors.childAge = false;
		}

		setErrors(newErrors);
		
		return res
	}

	const emailTest = () => {
		// eslint-disable-next-line
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email);
	}

	const checkPhone = () => {
		let res
		// eslint-disable-next-line
		// if (phone.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
		// 	res = false
		if (phone.length > 5) {
			res = false
		} else {
			res = true
		}
		return res
	}

	const generateId = () => {
		// eslint-disable-next-line
		return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
		// eslint-disable-next-line
			(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
		);
	}

	const generateNow = () => {
		const now = new Date();
		let year	= now.getFullYear();
		let month   = now.getMonth()+1; 
		let day	 = now.getDate();
		let hour	= now.getHours();
		let minute  = now.getMinutes();
		let second  = now.getSeconds(); 
		return `${day}.${month}.${year}, ${hour}:${minute}:${second}`;
	}

	const mode = (props) => {
		if(props.mode === '23aa4b8e-9092-4015-a322-7c5560dbd3bf') {
			if(childAge > 9) {
				return (
					<div className="form__section">
					<div className="form__labels-group-title">
						<span className='text'>{t('components.form.labels.group-titles.directions')}</span>
					</div>
					
					<input
						checked={directionTwo}
						onChange={(e) => setDirectionTwo(e.target.checked)}
						type="checkbox"

						id="direction-two"
						className="form__checkbox"

						name="direction-two"
					/>
					<label className={`form__label form__label-checkbox`} id="for-direction-two" for="direction-two">
						<div className="form__label-content">
							<div className="direction__info">
								<div className="direction__head">
									<span className='text text_size_large text_transform_uppercase text_weight_medium text_color_c-two no-select'>{t('components.form.labels.checkboxes.head.title')} 2</span>
									<span className='text text_size_large text_transform_uppercase text_weight_medium no-select'>60 {t('global.cost-per-month')}</span>
								</div>
								<div className="direction__description">
									<p className="text text_size_small no-select">{t('components.form.labels.checkboxes.descriptions.direction-2')}</p>
								</div>
							</div>
						</div>
					</label>
				</div>
				)
			} else {
				return (
					<div className="form__section">
					<div className="form__labels-group-title">
						<span className='text'>{t('components.form.labels.group-titles.directions')}</span>
					</div>
					<input
						checked={directionOne}
						onChange={(e) => setDirectionOne(e.target.checked)}
						type="checkbox"

						id="direction-one"
						className="form__checkbox"

						name="direction-one"
					/>
					<label className={`form__label form__label-checkbox`} id="for-direction-one" for="direction-one">
						<div className="form__label-content">
							<div className="direction__info">
								<div className="direction__head">
									<span className='text text_size_large text_transform_uppercase text_weight_medium text_color_c-two no-select'>{t('components.form.labels.checkboxes.head.title')} 1</span>
									<span className='text text_size_large text_transform_uppercase text_weight_medium no-select'>80 {t('global.cost-per-month')}</span>
								</div>
								<div className="direction__description">
									<p className="text text_size_small no-select">{t('components.form.labels.checkboxes.descriptions.direction-1')}</p>
								</div>
							</div>
						</div>
					</label>

					<input
						checked={directionTwo}
						onChange={(e) => setDirectionTwo(e.target.checked)}
						type="checkbox"

						id="direction-two"
						className="form__checkbox"

						name="direction-two"
					/>
					<label className={`form__label form__label-checkbox`} id="for-direction-two" for="direction-two">
						<div className="form__label-content">
							<div className="direction__info">
								<div className="direction__head">
									<span className='text text_size_large text_transform_uppercase text_weight_medium text_color_c-two no-select'>{t('components.form.labels.checkboxes.head.title')} 2</span>
									<span className='text text_size_large text_transform_uppercase text_weight_medium no-select'>60 {t('global.cost-per-month')}</span>
								</div>
								<div className="direction__description">
									<p className="text text_size_small no-select">{t('components.form.labels.checkboxes.descriptions.direction-2')}</p>
								</div>
							</div>
						</div>
					</label>
				</div>
				)
			}
		} else {
			return (
				<div className="form__section">
				<div className="form__labels-group-title">
					<span className='text'>{t('components.form.labels.group-titles.directions')}</span>
				</div>
				<input
					checked={directionOne}
					onChange={(e) => setDirectionOne(e.target.checked)}
					type="checkbox"

					id="direction-one"
					className="form__checkbox"

					name="direction-one"
				/>
				<label className={`form__label form__label-checkbox`} id="for-direction-one" for="direction-one">
					<div className="form__label-content">
						<div className="direction__info">
							<div className="direction__head">
								<span className='text text_size_large text_transform_uppercase text_weight_medium text_color_c-two no-select'>{t('components.form.labels.checkboxes.head.title')} 1</span>
								<span className='text text_size_large text_transform_uppercase text_weight_medium no-select'>80 {t('global.cost-per-month')}</span>
							</div>
							<div className="direction__description">
								<p className="text text_size_small no-select">{t('components.form.labels.checkboxes.descriptions.direction-1')}</p>
							</div>
						</div>
					</div>
				</label>

				<input
					checked={directionTwo}
					onChange={(e) => setDirectionTwo(e.target.checked)}
					type="checkbox"

					id="direction-two"
					className="form__checkbox"

					name="direction-two"
				/>
				<label className={`form__label form__label-checkbox`} id="for-direction-two" for="direction-two">
					<div className="form__label-content">
						<div className="direction__info">
							<div className="direction__head">
								<span className='text text_size_large text_transform_uppercase text_weight_medium text_color_c-two no-select'>{t('components.form.labels.checkboxes.head.title')} 2</span>
								<span className='text text_size_large text_transform_uppercase text_weight_medium no-select'>60 {t('global.cost-per-month')}</span>
							</div>
							<div className="direction__description">
								<p className="text text_size_small no-select">{t('components.form.labels.checkboxes.descriptions.direction-2')}</p>
							</div>
						</div>
					</div>
				</label>

				<input
					checked={directionThree}
					onChange={(e) => setDirectionThree(e.target.checked)}
					type="checkbox"

					id="direction-three"
					className="form__checkbox"

					name="direction-three"
				/>
				<label className={`form__label form__label-checkbox`} id="for-direction-three" for="direction-three">
					<div className="form__label-content">
						<div className="direction__info">
							<div className="direction__head">
								<span className='text text_size_large text_transform_uppercase text_weight_medium text_color_c-two no-select'>{t('components.form.labels.checkboxes.head.title')} 3</span>
								<span className='text text_size_large text_transform_uppercase text_weight_medium no-select'>60 {t('global.cost-per-month')}</span>
							</div>
							<div className="direction__description">
								<p className="text text_size_small no-select">{t('components.form.labels.checkboxes.descriptions.direction-3')}</p>
							</div>
						</div>
					</div>
				</label>
			</div>
			)
		}
	}

	return (
		<section className="form">
			<div className="container">
				<form className="form__content" onSubmit={(e) => { e.preventDefault(); send() }}>
					<div className="form__headline">
						<h1 className="text heading_one form__title">{t("components.form.headline.title")}</h1>
						<span className='text form__description'>{t("components.form.headline.description")}</span>
					</div>
					<div id='form__labels' className="form__section">
						<div className="form__labels-group-title">
							<span className='text'>{t("components.form.labels.group-titles.questionnaire")}</span>
						</div>
						<label className={`form__label ${errors.parentName ? 'req' : ''}`} css={content(t("components.form.labels.inputs.parent-name.tips.empty.value"))} id="for-parent-name">
							<div className="form__label-content">
								<input
									value={parentName}
									onChange={(e) => setParentName(e.target.value)}
									type="text"

									id="parent-name"
									className="form__input text text_size_large"

									name="parent-name"
									placeholder={t("components.form.labels.inputs.parent-name.placeholder")}

									minLength="1"
									maxLength="20"
								/>
							</div>
						</label>
						<label className={`form__label ${errors.email ? 'req' : ''}`} css={content(t("components.form.labels.inputs.email.tips.empty.value"))} id="for-email">
							<div className="form__label-content">
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="text"

									id="email"
									className="form__input text text_size_large"

									name="email"
									placeholder={t("components.form.labels.inputs.email.placeholder")}

									minLength="1"
									maxLength="50"
								/>
							</div>
						</label>
						<label className={`form__label ${errors.phone ? 'req' : ''}`} css={content(t("components.form.labels.inputs.phone.tips.empty.value"))} id="for-phone">
							<div className="form__label-content">
								<input
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									type="tel"

									id="phone"
									className="form__input text text_size_large"

									name="phone"
									placeholder={t("components.form.labels.inputs.phone.placeholder")}

									minLength="1"
									maxLength="20"
								/>
							</div>
						</label>
						<label className={`form__label ${errors.childName ? 'req' : ''}`} css={content(t("components.form.labels.inputs.child-name.tips.empty.value"))} id="for-child-name">
							<div className="form__label-content">
								<input
									value={childName}
									onChange={(e) => setChildName(e.target.value)}
									type="text"

									id="child-name"
									className="form__input text text_size_large"

									name="child-name"
									placeholder={t("components.form.labels.inputs.child-name.placeholder")}

									minLength="1"
									maxLength="20"
								/>
							</div>
						</label>
						<label className={`form__label ${errors.childAge ? 'req' : ''}`} css={content(t("components.form.labels.inputs.child-age.tips.empty.value", { childAgeMin: t('global.child-age-min'), childAgeMax: t('global.child-age-max') }))} id="for-child-age">
							<div className="form__label-content">
								<input
									value={childAge}
									onChange={(e) => setChildAge(e.target.value)}
									type="number"

									id="child-age"
									className="form__input text text_size_large"

									name="child-age"
									placeholder={t("components.form.labels.inputs.child-age.placeholder")}

									minLength="1"
									maxLength="2"
								/>
							</div>
						</label>
					</div>
					<hr className='devider' />
					{mode(props)}
					<hr className='devider' />
					<div className="form__section form__submit">
						<button className="text text_size_xxlarge text_weight_medium form__button no-select" type="submit">{t("components.form.submit.button")}</button>
						<span className="text form__notice">{t("components.form.submit.notice")}</span>
						<svg className='form__harmony no-select' viewBox="0 0 50 30" xmlns="http://www.w3.org/2000/svg">
							<path d="M27.0469 11.375L23.0078 14.5156C20.5469 16.4375 16.9766 15.9375 15.1328 13.4062C13.3984 11.0234 13.8359 7.69529 16.125 5.84373L22.625 0.585918C21.7188 0.203106 20.7422 0.00779327 19.75 0.00779327C18.2812 -1.92276e-05 16.8516 0.437481 15.625 1.24998L10 4.99998H3.75C1.67969 4.99998 0 6.67967 0 8.74998V18.75C0 20.8203 1.67969 22.5 3.75 22.5H12.2031L19.3438 29.0156C20.875 30.414 23.2422 30.3047 24.6406 28.7734C25.0703 28.2969 25.3594 27.7422 25.5078 27.164L26.8359 28.3828C28.3594 29.7812 30.7344 29.6797 32.1328 28.1562C32.4844 27.7734 32.7422 27.3281 32.9062 26.8672C34.4219 27.8828 36.4844 27.6719 37.7578 26.2812C39.1562 24.7578 39.0547 22.3828 37.5312 20.9844L27.0469 11.375Z" fill="#48B3A9"/>
							<path opacity="0.5" d="M25.2657 1.65625L17.7032 7.78125C16.4453 8.79688 16.2032 10.625 17.1563 11.9297C18.1641 13.3203 20.125 13.5938 21.4766 12.5391L29.2344 6.50781C29.7813 6.08594 30.5625 6.17969 30.9922 6.72656C31.4219 7.27344 31.3203 8.05469 30.7735 8.48438L29.1407 9.75L42.9844 22.5H46.25C48.3203 22.5 50 20.8203 50 18.75V8.75C50 6.67969 48.3203 5 46.25 5H40.3125H40H39.9453L39.6407 4.80469L33.9688 1.17188C32.7735 0.40625 31.375 0 29.9532 0C28.25 0 26.5938 0.585937 25.2657 1.65625Z" fill="#48B3A9"/>
						</svg>
					</div>
					<hr className='devider' />
					<section className="language">
						<div className="language__content">
							<span className="language__note text text_opacity_fifty">{t('global.choose-language') /* Выбрать другой язык */}</span>
							<div className="language__buttons">
								{translations(selectedLanguage) /* SLV | ENG */}
							</div>
						</div>
					</section>
				</form>
			</div>
			<div className="success">
				<div className="box">
					<span className='text no-select'>{t('components.form.responses.success.line-1')}</span>
					<span className='text no-select'>{t('components.form.responses.success.line-2')}</span>
				</div>
			</div>
		</section>
	)
}

export default Form
