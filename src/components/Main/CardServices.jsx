import { useState, useEffect } from 'react'
import './CardServices.scss'
import '../../assets/styles/media-queries.scss'
import spa from '../../icons/card-icon/spa-white.svg'
import mpa from '../../icons/card-icon/mpa-white.svg'
import service from '../../icons/card-icon/service-white.svg'
import eCommerce from '../../icons/card-icon/e-commerce-white.svg'
import speed from '../../icons/card-icon/speed-white.svg'
import school from '../../icons/card-icon/school-white.svg'
import webinar from '../../icons/card-icon/webinar-white.svg'
import crm from '../../icons/card-icon/crm-white.svg'
import payment from '../../icons/card-icon/payment-white.svg'
import funnel from '../../icons/card-icon/funnel-white.svg'
import bot from '../../icons/card-icon/bot-white.svg'
import marketing from '../../icons/card-icon/marketing-white.svg'
import analytic from '../../icons/card-icon/analytics-white.svg'
import sales from '../../icons/card-icon/sales-white.svg'
import call from '../../icons/card-icon/call-white.svg'
import other from '../../icons/card-icon/other-white.svg'

const CardServices = () => {
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
			<h3 className='title'>Чeм мы занимаемся и что можем сделать для вас?</h3>
			<article className='row cardServicesWrapper' id='cards-service-link'>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<div className='card cardWrapper'>
						<div className='cover item-a'>
							<span className='price price-a'>от 15000 ₽</span>
							<img src={spa} alt='Pictures cards' className='card-icon' />
							<h1 className='card-title-a'>
								Лендинги, одностраничные сайты, веб-приложения SPA
							</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-a'>
									Создадим сайт визитку или лендинг вашего продукта. Всё коротко
									и по делу на одной странице. Как на Tilda так и на стеке:
									HTML/БЭМ, CSS/SCSS/SASS, Pixel Perfect, Vue, JavaScript,
									Typescript, Coffescript, React JS, React Native, Bootstrap,
									TailWind, Webpack, Gulp, GIT, Photoshop, Illustrator, After
									Effects, Figma и другие.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-b'>
							<span className='price price-b'>от 25000 ₽</span>
							<img src={mpa} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-b'>
								Многостраничные сайты, веб-приложения MPA и PWA{' '}
							</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-b'>
									Сайты и веб-приложения для серьезных компаний, с возможностью
									реализовать масштабируемые проекты под любые задачи.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-c'>
							<span className='price price-c'>от 7000 ₽</span>
							<img src={service} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-c'>Сопровождение сайтов</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-c'>
									Возьмём на себя всю работу по сопровождению, обновлению и
									поддержанию вашего сайта.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-d'>
							<span className='price price-d'>от 35000 ₽</span>
							<img src={eCommerce} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-d'>
								Интернет-магазины и Интернет-витрины
							</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-d'>
									<span className='card-text-d-a'>
										Создание полноценных интернет-магазинов с товарами, услугами
										или создание интернет-витрин.
									</span>
									<br />
									<br />
									<span className='card-text-d-b'>
										Витриной называется рекламный каталог, в котором есть
										подробная информация про каждую позицию товара, доступного к
										заказу.
									</span>
									<br />
									<br />
									<span className='card-text-d-c'>
										Такой сайт позволяет выбрать товар, а оплатить и забрать его
										можно в реальной торговой точке.
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-e'>
							<span className='price price-e'>от 30000 ₽</span>
							<img src={speed} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-e'>Оптимизация сайтов</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-e'>
									<span className='card-text-e-a'>SEO оптимизация.</span>
									<br />
									<br />
									<span className='card-text-e-b'>
										Составление ТЗ. Аудит сайтa.
									</span>
									<br />
									<br />
									<span className='card-text-e-c'>
										Внедрение доступностии семантики.
									</span>
									<br />
									<br />
									<span className='card-text-e-d'>
										Перенос сайта с одной платформы на другую.
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-f'>
							<span className='price price-f'>от 120000 ₽</span>
							<img src={school} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-f'>
								Запуск и сопровождение Онлайн школ
							</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='big-text card-text-f'>
									<span className='card-text-f-a'>
										Создание и настройка сущностей курса: тренингов, уроков и
										заданий на платформе GetCourse.
									</span>
									<br />
									<br />
									<span className='card-text-f-b'>
										Создание, настройка и проведение вебинаров на платформе
										Bizon365.
									</span>
									<br />
									<br />
									<span className='card-text-f-c'>
										Создание и настройка автовебинаров.
									</span>
									<br />
									<br />
									<span className='card-text-f-d'>
										Настройка amoCRM. Синхронизация amoCRM с Bizon365 и
										GetCourse.
									</span>
									<br />
									<br />
									<span className='card-text-f-e'>
										Подключение WhatsApp к amoCRM. Установка онлайн-телефонии с
										Sipuni.
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-g'>
							<span className='price price-g'>от 20000 ₽</span>
							<img src={webinar} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-g'>Вебинары</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-g'>
									Создание, настройка и проведение вебинаров на платформе,
									настройка автовебинаров.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-h'>
							<span className='price price-h'>от 2000 ₽</span>
							<img src={crm} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-h'>CRM-системы</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-h'>
									Внедрение CRM-систем. Подключение мессенджеров к СRM.
									Интеграция онлайн-телефонии.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-i'>
							<span className='price price-i'>от 2000 ₽</span>
							<img src={payment} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-i'>Интеграция платежных систем</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-i'>
									Платежные системы: интеграция платежных систем на сайт, для
									удобной онлайн оплаты.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-j'>
							<span className='price price-j'>от 70000 ₽</span>
							<img src={funnel} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-j'>Автоматизация воронок</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-j'>
									<span className='card-text-j-a'>
										Создание карты Движения Покупателя и реализация ее в
										воронке.
									</span>
									<br />
									<br />
									<span className='card-text-j-b'>
										Создание и настройка SMS-рассылки. Создание и настройка
										автозвонков.
									</span>
									<br />
									<br />
									<span className='card-text-j-c'>
										Реализация воронки в чат-ботах.
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-k'>
							<span className='price price-k'>от 8000 ₽</span>
							<img src={bot} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-k'>Чат-боты</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-k'>
									Создание и настройка чат ботов, интеграция настройка связи
									через What's App, Telegram, VK.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-l'>
							<span className='price price-l'>от 3000 ₽</span>
							<img src={marketing} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-l'>Маркетинговые услуги</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-l'>
									<span className='card-text-l-a'>
										Написание продающего текста.
									</span>
									<br />
									<br />
									<span className='card-text-l-b'>
										Разработка и внедрение маркетинговых мероприятий, подходящих
										под ваш сегмент и вашу деятельность.
									</span>
									<br />
									<br />
									<span className='card-text-l-c'>
										Мониторинг конкурентов, конкурентный анализ.
									</span>
									<br />
									<br />
									<span className='card-text-l-d'>
										Работа с блогерами и лидерами мнений.
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-m'>
							<span className='price price-m'>от 7000 ₽</span>
							<img src={analytic} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-m'>Аналитика и стратегия</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-m'>
									SWOT анализ, ABC анализ, разработка и применение антикризисных
									мероприятий.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-n'>
							<span className='price price-n'>от 70000 ₽</span>
							<img src={sales} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-n'>Работа с отделом продаж</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-n'>
									<span className='card-text-n-a'>
										Создание отдела продаж, повышение конверсий, увеличение доли
										рынка, повышение квалификации и компетенции отдела продаж.
									</span>
									<br />
									<br />
									<span className='card-text-n-b'>
										Создание и увеличение воронки клиентов.
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-o'>
							<span className='price price-o'>от 80000 ₽</span>
							<img src={call} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-o'>Call - центр</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-o'>
									Обзвон потенциальной базы холодных клиентов, рассылка КП,
									создание воронки клиентов.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='wrapper-card-block col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12'>
					<div className='card cardWrapper'>
						<div className='cover item-p'>
							<span className='price price-p'>от 3000 ₽</span>
							<img src={other} alt='Pictures card' className='card-icon' />
							<h1 className='card-title-p'>Дополнительные услуги</h1>
							<div className='moreInfo'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconDown'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
								&nbsp;
								<p className='textMoreInfo'>Подробнее</p>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 160 160'
									className='interactiveIconUp'
								>
									<g opacity='.87' fill='none' stroke='#fff'>
										<path class='ellipse4' />
										<path class='ellipse3' />
										<path class='ellipse2' />
										<path class='ellipse1' />
										<path class='ellipse0' />
										<path
											class='ellipse'
											d='M68,61.83a12,12 0 1,0 24,0a12,12 0 1,0 -24,0'
											stroke-miterlimit='10'
											fill='#fff'
											opacity='0.87'
										/>
										<path
											class='hand'
											d='M100.33 82.21a5.82 5.82 0 0 0-3.66.19c-.08-.93-.46-3.07-2.32-3.64a5.83 5.83 0 0 0-3.74.21 3.59 3.59 0 0 0-2.24-3 5.85 5.85 0 0 0-3.64.17v-7.68c0-2-.83-5.44-4-5.44-2.91 0-4 3.25-4 5.44v17.08C75.34 84.12 73 82.13 71.14 82c-3-.24-5.19 1.64-4.59 4.56s3.12 2.75 5 5.14 6.34 9.81 6.37 9.86c.67 1.26 2.49 4.74 2.79 5.62a12 12 0 0 1 .27 3.09.79.79 0 0 0 .22.55.76.76 0 0 0 .54.23h17.18a.77.77 0 0 0 .76-.68 17.08 17.08 0 0 0 0-2.73 5.5 5.5 0 0 1 1.32-3.84 11.61 11.61 0 0 0 1.63-4.52.41.41 0 0 0 0-.11V86.28c.04-.28-.01-3.35-2.3-4.07z'
											fill='#121212'
											stroke='#fff'
											stroke-miterlimit='10'
										/>
										<path class='bar' d='M96.68 88.8v-6.4' />
										<path class='bar' d='M90.61 87.29v-8.36' />
										<path class='bar' d='M84.73 86.74V76.13' />
										<path class='bar' d='M76.79 87.94v-2.39' />
									</g>
								</svg>
							</div>
							<div className='card-back'>
								<p className='card-text-p'>
									<span className='card-text-p-a'>
										Продажа, установка и настройка лицензионного программного
										обеспечения.
									</span>
									<br />
									<br />
									<span className='card-text-p-b'>
										Настройка, оптимизация и модернизация вашего оборудования.
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
