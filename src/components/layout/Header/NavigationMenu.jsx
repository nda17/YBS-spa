import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { CustomLink } from '../../ui/links/CustomLink'
import LogoSvg from '../../../public/images/YBS-white.svg'
import PhoneSvg from '../../../public/icons/link-icon/phone-white.svg'
import WhatsAppSvg from '../../../public/icons/link-icon/wa-white.svg'
import TelegramSvg from '../../../public/icons/link-icon/tg-white.svg'
import BehanceSvg from '../../../public/icons/link-icon/be-white.svg'
import './NavigationMenu.scss'
import '../../../assets/styles/media-queries.scss'
import { HamburgerMenu } from './HamburgerMenu'
import { ButtonsChangeLang } from '../../ui/buttons/ButtonsChangeLang' 

const NavigationMenu = () => {
	const { t, i18n } = useTranslation()
	useEffect(() => {
		//Animation logo
		let count = 0
		setInterval(function () {
			count === 360 ? (count = 0) : count--
			document.querySelector(
				'.section-nav__logo-item'
			).style.transform = `rotate3d(1, 1, 1, ${count}deg)`
		}, 40)
	}, [])
	useEffect(() => {
		//Animation icons
		setInterval(function () {
			document.querySelector('.section-nav__menu-link-icon').style.scale = '1.2'
			document.querySelector('.section-nav__menu-link-icon').style.scale = '1'
		}, 200)
	}, [])
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
							<CustomLink to='/'>{t('headerHome.home')}</CustomLink>
							<CustomLink to='/about'>{t('headerAbout.about')}</CustomLink>
						</li>
					</ul>
					<ul className='CustomLinkBlock'>
						<li className='CustomLinkWrapper'>
							<CustomLink to='/services'>
								{t('headerServices.services')}
							</CustomLink>
							<CustomLink to='/calculate'>
								{t('headerCalculation.calculation')}
							</CustomLink>
							<CustomLink to='/contacts'>
								{t('headerContacts.contacts')}
							</CustomLink>
						</li>
					</ul>
					<div className='section-nav__menu-link section-nav__menu-link-wrap-icon'>
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
					</div>
					<div className='section-nav__menu-link section-nav__menu-link-wrap-icon'>
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
					</div>
					<ButtonsChangeLang />
				</div>
				<HamburgerMenu />
			</div>
		</nav>
	)
}

export { NavigationMenu }
