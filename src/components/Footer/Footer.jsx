import { useEffect } from 'react';
import LogoSvg from '../../images/YBS-white.svg';
import PhoneSvg from '../../icons/link-icon/phone-white.svg';
import WhatsAppSvg from '../../icons/link-icon/wa-white.svg';
import TelegramSvg from '../../icons/link-icon/tg-white.svg';
import BehanceSvg from '../../icons/link-icon/be-white.svg';
import GithubSvg from '../../icons/link-icon/gh-white.svg';
import styles from './Footer.scss';
import '../../assets/styles/media-queries.scss';

const Footer = () => {
	useEffect(() => {
		const onEntry = (entry) => {
			entry.forEach(change => {
				if (change.isIntersecting) {
					change.target.classList.add('element-show');
				}
			}, []);
		}
		let options = {
			threshold: [0],
		};
		let observer = new IntersectionObserver(onEntry, options);
		let elements = document.querySelectorAll('.element-animation');
		for (let elm of elements) {
			observer.observe(elm);
		}
	});
	return (
		<nav className='row section-nav-footer element-animation'>
			<div className='section-nav-wrap-footer col-12'>
				<a
					className='section-nav__block-logo-footer'
					href='https://ybs.one/'
					name='header'
				>
					<img
						className='section-nav__logo-item-footer'
						src={LogoSvg}
						alt='Logo'
					/>
					<p className='section-nav__logo-slogan-footer'>
						2023 All rights reserved
					</p>
				</a>
				<ul
					className='section-nav__menu-list section-nav__menu-list-footer'
					id='contacts-link'
				>
					<li className='section-nav__menu-link section-nav__menu-link-wrap-icon-footer'>
						<a href='tel:+79990860186'>
							<img
								className='section-nav__menu-link-icon section-nav__menu-link-wrap-icon-phone section-nav__menu-link-icon-footer'
								src={PhoneSvg}
								alt='Phone link'
							/>
						</a>
					</li>
					<li className='section-nav__menu-link section-nav__menu-link-wrap-icon-footer'>
						<a href='https://api.whatsapp.com/send/?phone=79990860186&text=%D0%A5%D0%BE%D1%87%D1%83+%D1%83+%D0%B2%D0%B0%D1%81+%D1%81%D0%B0%D0%B9%D1%82%21&type=phone_number&app_absent=0'>
							<img
								className='section-nav__menu-link-icon section-nav__menu-link-wrap-icon-whatsapp section-nav__menu-link-icon-footer'
								src={WhatsAppSvg}
								alt='WhatsApp link'
							/>
						</a>
					</li>
					<li className='section-nav__menu-link section-nav__menu-link-wrap-icon-footer'>
						<a href='https://t.me/ybs_one'>
							<img
								className='section-nav__menu-link-icon section-nav__menu-link-wrap-icon-telegram section-nav__menu-link-icon-footer'
								src={TelegramSvg}
								alt='Telegram link'
							/>
						</a>
					</li>
					<li className='section-nav__menu-link section-nav__menu-link-wrap-icon-footer'>
						<a href='https://www.behance.net/ybsone'>
							<img
								className='section-nav__menu-link-icon section-nav__menu-link-wrap-icon-behance section-nav__menu-link-icon-footer'
								src={BehanceSvg}
								alt='Behance link'
							/>
						</a>
					</li>
					<li className='section-nav__menu-link section-nav__menu-link-wrap-icon-footer'>
						<a href='https://github.com/nda17'>
							<img
								className='section-nav__menu-link-icon section-nav__menu-link-wrap-icon-telegram section-nav__menu-link-icon-footer'
								src={GithubSvg}
								alt='Github link'
							/>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export { Footer };
