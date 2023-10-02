import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import './CardServices.scss'
import spa from '../../../public/icons/card-icon/spa-white.svg'
import mpa from '../../../public/icons/card-icon/mpa-white.svg'
import service from '../../../public/icons/card-icon/service-white.svg'
import eCommerce from '../../../public/icons/card-icon/e-commerce-white.svg'
import speed from '../../../public/icons/card-icon/speed-white.svg'
import school from '../../../public/icons/card-icon/school-white.svg'
import webinar from '../../../public/icons/card-icon/webinar-white.svg'
import crm from '../../../public/icons/card-icon/crm-white.svg'
import payment from '../../../public/icons/card-icon/payment-white.svg'
import funnel from '../../../public/icons/card-icon/funnel-white.svg'
import bot from '../../../public/icons/card-icon/bot-white.svg'
import marketing from '../../../public/icons/card-icon/marketing-white.svg'
import analytic from '../../../public/icons/card-icon/analytics-white.svg'
import sales from '../../../public/icons/card-icon/sales-white.svg'
import call from '../../../public/icons/card-icon/call-white.svg'
import other from '../../../public/icons/card-icon/other-white.svg'

const CardServices = () => {
	const { t, i18n } = useTranslation()
	const [show, setShow] = useState(false)
	useEffect(() => {
		const textElement = document.querySelector('.title')
		setTimeout(() => {
			setShow(true)
			textElement.style.opacity = '1'
		}, 1000)
	}, [show])
	useEffect(() => {
		const onEntry = entry => {
			entry.forEach(change => {
				if (change.isIntersecting) {
					change.target.classList.add('show')
				}
			})
		}
		let options = {
			threshold: [0]
		}
		let observer = new IntersectionObserver(onEntry, options)
		let elements = document.querySelectorAll('.cardWrapper')
		for (let elm of elements) {
			observer.observe(elm)
		}
	}, [])
	return (
		<>
			<h3 className='title'>{t('cardTitle.title')}</h3>
			<article className='row cardServicesWrapper' id='cards-service-link'>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<div className='card cardWrapper'>
						<div className='cover item-a'>
							<span className='price price-a'>{t('cardPriceA.price')}</span>
							<img src={spa} alt='Pictures cards' className='card-icon' />
							<h1 className='card-title-a'>{t('cardTextA.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-a'>{t('cardTextBackSideA.text')}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-b'>
							<span className='price price-b'>{t('cardPriceB.price')}</span>
							<img src={mpa} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-b'>{t('cardTextB.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-b'>{t('cardTextBackSideB.text')}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-c'>
							<span className='price price-c'>{t('cardPriceC.price')}</span>
							<img src={service} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-c'>{t('cardTextC.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-c'>{t('cardTextBackSideC.text')}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-d'>
							<span className='price price-d'>{t('cardPriceD.price')}</span>
							<img src={eCommerce} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-d'>{t('cardTextD.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-d'>
									<span className='card-text-d-a'>
										{t('cardTextBackSideD-A.text')}
									</span>
									<br />
									<br />
									<span className='card-text-d-b'>
										{t('cardTextBackSideD-B.text')}
									</span>
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-e'>
							<span className='price price-e'>{t('cardPriceE.price')}</span>
							<img src={speed} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-e'>{t('cardTextE.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-e'>
									<span className='card-text-e-a'>
										{t('cardTextBackSideE-A.text')}
									</span>
									<br />
									<br />
									<span className='card-text-e-b'>
										{t('cardTextBackSideE-B.text')}
									</span>
									<br />
									<br />
									<span className='card-text-e-c'>
										{t('cardTextBackSideE-C.text')}
									</span>
									<br />
									<br />
									<span className='card-text-e-d'>
										{t('cardTextBackSideE-D.text')}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-f'>
							<span className='price price-f'>{t('cardPriceF.price')}</span>
							<img src={school} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-f'>{t('cardTextF.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='big-text card-text-f'>
									<span className='card-text-f-a'>
										{t('cardTextBackSideF-A.text')}
									</span>
									<br />
									<br />
									<span className='card-text-f-b'>
										{t('cardTextBackSideF-B.text')}
									</span>
									<br />
									<br />
									<span className='card-text-f-c'>
										{t('cardTextBackSideF-C.text')}
									</span>
									<br />
									<br />
									<span className='card-text-f-d'>
										{t('cardTextBackSideF-D.text')}
									</span>
									<br />
									<br />
									<span className='card-text-f-e'>
										{t('cardTextBackSideF-E.text')}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-g'>
							<span className='price price-g'>{t('cardPriceG.price')}</span>
							<img src={webinar} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-g'>{t('cardTextG.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-g'>{t('cardTextBackSideG.text')}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-h'>
							<span className='price price-h'>{t('cardPriceH.price')}</span>
							<img src={crm} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-h'>{t('cardTextH.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-h'>{t('cardTextBackSideH.text')}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-i'>
							<span className='price price-i'>{t('cardPriceI.price')}</span>
							<img src={payment} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-i'>{t('cardTextI.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-i'>{t('cardTextBackSideI.text')}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-j'>
							<span className='price price-j'>{t('cardPriceJ.price')}</span>
							<img src={funnel} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-j'>{t('cardTextJ.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-j'>
									<span className='card-text-j-a'>
										{t('cardTextBackSideJ-A.text')}
									</span>
									<br />
									<br />
									<span className='card-text-j-b'>
										{t('cardTextBackSideJ-B.text')}
									</span>
									<br />
									<br />
									<span className='card-text-j-c'>
										{t('cardTextBackSideJ-C.text')}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-k'>
							<span className='price price-k'>{t('cardPriceK.price')}</span>
							<img src={bot} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-k'>{t('cardTextK.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-k'>{t('cardTextBackSideK.text')}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-l'>
							<span className='price price-l'>{t('cardPriceL.price')}</span>
							<img src={marketing} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-l'>{t('cardTextL.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-l'>
									<span className='card-text-l-a'>
										{t('cardTextBackSideL-A.text')}
									</span>
									<br />
									<br />
									<span className='card-text-l-b'>
										{t('cardTextBackSideL-B.text')}
									</span>
									<br />
									<br />
									<span className='card-text-l-c'>
										{t('cardTextBackSideL-C.text')}
									</span>
									<br />
									<br />
									<span className='card-text-l-d'>
										{t('cardTextBackSideL-D.text')}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-m'>
							<span className='price price-m'>{t('cardPriceM.price')}</span>
							<img src={analytic} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-m'>{t('cardTextM.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-m'>{t('cardTextBackSideM.text')}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-n'>
							<span className='price price-n'>{t('cardPriceN.price')}</span>
							<img src={sales} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-n'>{t('cardTextN.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-n'>
									<span className='card-text-n-a'>
										{t('cardTextBackSideN-A.text')}
									</span>
									<br />
									<br />
									<span className='card-text-n-b'>
										{t('cardTextBackSideN-B.text')}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-o'>
							<span className='price price-o'>{t('cardPriceO.price')}</span>
							<img src={call} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-o'>{t('cardTextO.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-o'>{t('cardTextBackSideO.text')}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-p'>
							<span className='price price-p'>{t('cardPriceP.price')}</span>
							<img src={other} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-p'>{t('cardTextP.text')}</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>{t('cardMoreInfo.text')}</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path className='ellipse4' />
										<path className='ellipse3' />
										<path className='ellipse2' />
										<path className='ellipse1' />
										<path className='ellipse0' />
										<path
											className='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											strokeMiterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											className='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											strokeMiterlimit='10'
										/>
										<path className='bar' d='M96.68 88.8v-6.4' />
										<path className='bar' d='M90.61 87.29v-8.36' />
										<path className='bar' d='M84.73 86.74V76.13' />
										<path className='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-p'>
									<span className='card-text-p-a'>
										{t('cardTextBackSideP-A.text')}
									</span>
									<br />
									<br />
									<span className='card-text-p-b'>
										{t('cardTextBackSideP-B.text')}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</article>
		</>
	)
}

export { CardServices }
