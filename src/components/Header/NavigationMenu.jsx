import { useEffect } from 'react';
import { CustomLink } from '../CustomLink';
import LogoSvg from '../../images/YBS-white.svg';
import PhoneSvg from '../../icons/link-icon/phone-white.svg';
import WhatsAppSvg from '../../icons/link-icon/wa-white.svg';
import TelegramSvg from '../../icons/link-icon/tg-white.svg';
import BehanceSvg from '../../icons/link-icon/be-white.svg';
import './NavigationMenu.scss';
import '../../assets/styles/media-queries.scss'
import { HamburgerMenu } from './HamburgerMenu';

const NavigationMenu = () => {
	useEffect(() => {
		//Animation logo
		let count = 0;
		setInterval(function () {
			count === 360 ? (count = 0) : count--;
			document.querySelector(
				'.section-nav__logo-item'
			).style.transform = `rotate3d(1, 1, 1, ${count}deg)`;
		}, 40);
	}, []);
	useEffect(() => {
		//Animation icons
		setInterval(function () {
			document.querySelector('.section-nav__menu-link-icon').style.scale =
				'1.2';
			document.querySelector('.section-nav__menu-link-icon').style.scale = '1';
		}, 200);
	}, []);
	return (
		<nav className='row section-nav'>
			<div className='section-nav-wrap col-12'>
				<a
					className='section-nav__block-logo'
					href='https://ybs.one/'
					id='header'
				>
					<img className='section-nav__logo-item' src={LogoSvg} alt='Logo' />
					<p className='section-nav__logo-slogan'>Your Business Site</p>
				</a>
				<div className='section-nav__menu-list'>
					<ul className='CustomLinkBlock'>
						<li className='CustomLinkWrapper'>
							<CustomLink to='/'>Главная</CustomLink>
							<CustomLink to='/about'>О нас</CustomLink>
						</li>
					</ul>
					<ul className='CustomLinkBlock'>
						<li className='CustomLinkWrapper'>
							<CustomLink to='/services'>Наши услуги</CustomLink>
							<CustomLink to='/calculate'>Рассчитать стоимость</CustomLink>
							<CustomLink to='/contacts'>Контакты</CustomLink>
						</li>
					</ul>
					{/* <div className='section-nav__checkboxBtn'>
						<ButtonColorTheme />
						<ButtonLanguage />
					</div> */}
					<li className='section-nav__menu-link section-nav__menu-link-wrap-icon'>
						<a href='tel:+79990860186'>
							<img
								className='section-nav__menu-link-icon section-nav__menu-link-wrap-icon-phone'
								src={PhoneSvg}
								alt='Phone link'
							/>
						</a>
						<a href='https://www.behance.net/ybsone'>
							<img
								className='section-nav__menu-link-icon section-nav__menu-link-wrap-icon-behance'
								src={BehanceSvg}
								alt='Behance link'
							/>
						</a>
					</li>
					<li className='section-nav__menu-link section-nav__menu-link-wrap-icon'>
						<a href='https://api.whatsapp.com/send/?phone=79990860186&text=%D0%A5%D0%BE%D1%87%D1%83+%D1%83+%D0%B2%D0%B0%D1%81+%D1%81%D0%B0%D0%B9%D1%82%21&type=phone_number&app_absent=0'>
							<img
								className='section-nav__menu-link-icon section-nav__menu-link-wrap-icon-whatsapp'
								src={WhatsAppSvg}
								alt='WhatsApp link'
							/>
						</a>
						<a href='https://t.me/ybs_one'>
							<img
								className='section-nav__menu-link-icon section-nav__menu-link-wrap-icon-telegram'
								src={TelegramSvg}
								alt='Telegram link'
							/>
						</a>
					</li>
				</div>
				<HamburgerMenu />
			</div>
		</nav>
	)
};

export { NavigationMenu };