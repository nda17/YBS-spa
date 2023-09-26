import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { CustomLink } from '../../ui/links/CustomLink'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { ButtonsChangeLang } from '../../ui/buttons/ButtonsChangeLang'
import './MobileNavigationMenu.scss'
import '../../../assets/styles/media-queries.scss'
import LogoSvg from '../../../public/images/YBS-white.svg'
import PhoneSvg from '../../../public/icons/link-icon/phone-white.svg'
import WhatsAppSvg from '../../../public/icons/link-icon/wa-white.svg'
import TelegramSvg from '../../../public/icons/link-icon/tg-white.svg'
import BehanceSvg from '../../../public/icons/link-icon/be-white.svg'

const MobileNavigationMenu = props => {
	const { t, i18n } = useTranslation()
	const { isVisible, handleOpenHamburger = Function.prototype } = props //Состояние показан бургер или стрелка (открыто мобильное меню или нет), функция закрытия мобильного меню
	const mobileMenuRef = useRef(null)
	useClickOutside(mobileMenuRef, () => handleOpenHamburger()) //Закрытие мобильного меню при клике вне его блока
	return (
		!isVisible && (
			<article className='slide-menu-wrap' ref={mobileMenuRef}>
				<ul className='slide-menu'>
					<img className='logo-menu' src={LogoSvg} alt='Logo' />
					<ul className='mobileCustomLinkBlock'>
						<li className='mobileCustomLinkWrapper'>
							<CustomLink
								to='/'
								className='mobileCustomLink'
								onClick={() => handleOpenHamburger()}
							>
								{t('headerHome.home')}
							</CustomLink>
							<CustomLink
								to='/about'
								className='mobileCustomLink'
								onClick={() => handleOpenHamburger()}
							>
								{t('headerAbout.about')}
							</CustomLink>
						</li>
					</ul>
					<ul className='mobileCustomLinkBlock'>
						<li className='mobileCustomLinkWrapper'>
							<CustomLink
								to='/services'
								className='mobileCustomLink'
								onClick={() => handleOpenHamburger()}
							>
								{t('headerServices.services')}
							</CustomLink>
							<CustomLink
								to='/calculate'
								className='mobileCustomLink'
								onClick={() => handleOpenHamburger()}
							>
								{t('headerCalculation.calculation')}
							</CustomLink>
							<CustomLink
								to='/contacts'
								className='mobileCustomLink'
								onClick={() => handleOpenHamburger()}
							>
								{t('headerContacts.contacts')}
							</CustomLink>
						</li>
					</ul>
					<ButtonsChangeLang />
					<div className='section-nav__menu-link section-nav__menu-link-wrap-icon section-nav__menu-link-wrap-icon-mobile'>
						<a href='tel:+79990860186'>
							<img
								className='section-nav__menu-link-icon section-nav__menu-link-wrap-icon-phone section-nav__menu-link-icon-mobile'
								src={PhoneSvg}
								alt='Phone link'
								onClick={() => handleOpenHamburger()}
							/>
						</a>
						<a href='https://api.whatsapp.com/send/?phone=79990860186&text=%D0%A5%D0%BE%D1%87%D1%83+%D1%83+%D0%B2%D0%B0%D1%81+%D1%81%D0%B0%D0%B9%D1%82%21&type=phone_number&app_absent=0'>
							<img
								className='section-nav__menu-link-icon section-nav__menu-link-wrap-icon-whatsapp section-nav__menu-link-icon-mobile'
								src={WhatsAppSvg}
								alt='WhatsApp link'
								onClick={() => handleOpenHamburger()}
							/>
						</a>
						<a href='https://t.me/ybs_one'>
							<img
								className='section-nav__menu-link-icon section-nav__menu-link-wrap-icon-telegram section-nav__menu-link-icon-mobile'
								src={TelegramSvg}
								alt='Telegram link'
								onClick={() => handleOpenHamburger()}
							/>
						</a>
						<a href='https://www.behance.net/ybsone'>
							<img
								className='section-nav__menu-link-icon section-nav__menu-link-wrap-icon-behance section-nav__menu-link-icon-mobile'
								src={BehanceSvg}
								alt='Behance link'
								onClick={() => handleOpenHamburger()}
							/>
						</a>
					</div>
				</ul>
			</article>
		)
	)
}

export { MobileNavigationMenu }
