import React from 'react'
import { useTranslation } from 'react-i18next'

import './Footer.css'

function Footer(props) {
	const { t } = useTranslation()

	switch (props.type) {
		case 'full':
			return (
				<footer>
					
				</footer>
			)
		case 'easy':
			return (
				<footer className='footer'>
					<div className="container container_long">
						<div className="footer__content">
							<div className="copyright">
								<span className='text text_opacity_fifty no-select'>{t('components.footer.copyright')}</span>
							</div>
							<div className="location">
								<span className='text text_opacity_fifty no-select'>{t('components.footer.location')}</span>
							</div>
						</div>
					</div>
				</footer>
			)
		default:
			break;
	}
}

export default Footer
