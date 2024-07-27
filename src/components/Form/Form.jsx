import React, { useRef } from 'react'
// import { useTranslation } from 'react-i18next'
// import i18n from '../../i18n';

import "./Form.css"

function Form() {
	// const { t } = useTranslation();

	const
		telegramBotToken = process.env.TELEGRAM_BOT_TOKEN,
		telegramChatId = process.env.TELEGRAM_CHAT_ID,
		url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?parse_mode=Markdown`,
		
		parentName = useRef(null),
		eMail = useRef(null),
		phone = useRef(null),
		childName = useRef(null),
		childAge = useRef(null),

		displayNone = { display: "none" },
		displayBlock = { display: "block" }

	const send = () => {

		let c = fullFormMode()

		if (c) {
			let id = generateId();
			let now = generateNow();

			let message =
				`
*ЗАПИСЬ НА КУРС от ${now}*

*Имя родителя:* \`${parentName.current.value}\`
*E-Mail:* \`${eMail.current.value}\`
*Телефон:* \`${phone.current.value}\`
*Имя ребёнка:* \`${childName.current.value}\`
*Возраст ребёнка:* \`${childAge.current.value}\`

ID этой записи: \`${id}\`
				`

				console.log("Token: " + telegramBotToken.toString().slice(0, -35));
				console.log("Chat ID: " + telegramChatId.toString().slice(0, -10));
				console.log(message);

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
					console.log('Success:', data);
				  })
				  .catch((error) => {
					console.error('Error:', error);
				  });
		}

	}


	const fullFormMode = () => {
		let formLabelAddition = document.querySelectorAll(".form__label--addition")
		let res = true

		if (parentName.current.value.length < 2) {
			alert('Пожалуйста, введите ваше имя.');
			res = false
		} else if (emailTest()) {
			console.log("E-Mail wrong");
			alert("Пожалуйста, проверьте правильность введенного адреса электронной почты.")
			res = false
		} else if (checkPhone()) {
			console.log("Phone wrong");
			alert("Пожалуйста, проверьте правильность введенного номера телефона.")
			res = false
		} else if (childName.current.value.length < 2) {
			alert('Пожалуйста, введите имя вашего ребенка.');
			res = false
		} else if (childAge.current.value < 1) {
			alert('Пожалуйста, введите возраст вашего ребенка.');
			res = false
		} else if (!(childAge.current.value >= 7 && childAge.current.value <= 15)) {
			alert('Приносим извинения, но мы набираем в группы детей от 7-ми до 15-ти.');
			res = false
		}
		
		formLabelAddition.forEach(element => {
			if (element.style.display === displayNone.display) {
				element.setAttribute("style", displayBlock)

				res = false
			}
		});

		return res
	}

	const emailTest = () => {
		// eslint-disable-next-line
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(eMail.current.value);
	}

	const checkPhone = () => {
		let res
		// eslint-disable-next-line
		if (phone.current.value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
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

	return (
		<div className="form grid grid__viewports">
			<div className="grid__viewport grid__viewport--col-1"></div>
			<div className="grid__viewport grid__viewport--col-2">
				<form className="form__content" onSubmit={(e) => {
					e.preventDefault()
					send()
				}}>

					<span className="form_title">Записаться на курс</span>
					<div className="grid form__inputs">
						<label className="form__label" id="for-parent-name">
							<input
								ref={parentName}
								type="text"

								id="parent-name"
								className="form__input"

								name="parent-name"
								placeholder="Ваше имя"

								minLength="1"
								maxLength="20"
							/>
						</label>
						<label className="form__label form__label--addition" style={displayNone} id="for-email">
							<input
								ref={eMail}
								type="text"

								id="email"
								className="form__input"

								name="email"
								placeholder="E-Mail"

								minLength="1"
								maxLength="50"
							/>
						</label>
						<label className="form__label form__label--addition" style={displayNone} id="for-phone">
							<input
								ref={phone}
								type="tel"

								id="phone"
								className="form__input"

								name="phone"
								placeholder="Телефон"

								minLength="1"
								maxLength="20"
							/>
						</label>
						<label className="form__label" id="for-child-name">
							<input
								ref={childName}
								type="text"

								id="child-name"
								className="form__input"

								name="child-name"
								placeholder="Имя ребенка"

								minLength="1"
								maxLength="20"
							/>
						</label>
						<label className="form__label form__label--addition" style={displayNone} id="for-child-age">
							<input
								ref={childAge}
								type="number"

								id="child-age"
								className="form__input"

								name="child-age"
								placeholder="Возраст ребенка"

								minLength="1"
								maxLength="2"
							/>
						</label>
					</div>
					<div className="grid form_submit">
						<button className="form__button no-select" type="submit">Записаться бесплатно</button>
						<span className="form__notice">Отправляя заявку, нажимая на кнопку, вы даете согласие на обработку персональных данных «Студии ⅄OU!»</span>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Form
