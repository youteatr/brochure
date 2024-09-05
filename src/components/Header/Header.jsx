import React from 'react'
import { useTranslation } from 'react-i18next'
import { HashLink as Link } from 'react-router-hash-link';

import Logo from '../Logo/Logo'

import './Header.css'

function Header() {
	const { t } = useTranslation()

	return (
		<header className='header'>
			<div className='container'>
				<div className='header__content'>
					<div className="logo">
						<Logo type='t' />
					</div>
					<hr className='devider mobile' />
					<nav className="menu">
						<ul className='menu__content' title={t('properties.titles.shift-to-scroll')}>
							<ol className='menu__item'>
								<Link className='link no-select' smooth to='/#about'>
									<span className='text text_hover_s-two text_weight_medium text_transform_uppercase'>{t('components.header.menu.about')}</span>
								</Link>
							</ol>
							<ol className='menu__item'>
								<Link className='link no-select' smooth to='/#our-courses'>
									<span className='text text_hover_s-two text_weight_medium text_transform_uppercase'>{t('components.header.menu.our-courses')}</span>
								</Link>
							</ol>
							<ol className='menu__item'>
								<Link className='link no-select' smooth to='/#tutors'>
									<span className='text text_hover_s-two text_weight_medium text_transform_uppercase'>{t('components.header.menu.tutors')}</span>
								</Link>
							</ol>
							<ol className='menu__item'>
								<Link className='link no-select' smooth to='/#gallery'>
									<span className='text text_hover_s-two text_weight_medium text_transform_uppercase'>{t('components.header.menu.gallery')}</span>
								</Link>
							</ol>
							<ol className='menu__item'>
								<Link className='link no-select' smooth to='/#contact'>
									<span className='text text_hover_s-two text_weight_medium text_transform_uppercase'>{t('components.header.menu.contact')}</span>
								</Link>
							</ol>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
