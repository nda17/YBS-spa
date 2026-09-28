import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { BsTelephoneOutboundFill, BsTelegram, BsWhatsapp } from 'react-icons/bs'
import { useClickOutside } from '../../../hooks/useClickOutside'
import ButtonsChangeLang from '../../ui/buttons/ButtonsChangeLang'
import LogoSvg from '../../../public/images/YBS-white.svg'
import './MobileMenu.scss'
import '../../../assets/styles/media-queries.scss'

const MobileMenu = props => {
	const { t } = useTranslation()
	const {
		isVisible,
		toggleVisible = Function.prototype,
		navItems = [],
		scrollToSection = Function.prototype
	} = props //Состояние показан бургер или стрелка (открыто мобильное меню или нет), функция закрытия мобильного меню
	const mobileMenuRef = useRef(null)
	useClickOutside(mobileMenuRef, toggleVisible) //Закрытие мобильного меню при клике вне его блока
	const menuItems =
		navItems.length > 0
			? navItems
			: [
				{ sectionId: 'home', label: t('headerHome.home') },
				{ sectionId: 'services', label: t('headerServices.services') },
				{ sectionId: 'portfolio', label: t('headerPortfolio.portfolio') }
			]
	const navigationItems = menuItems.filter(item => item.sectionId !== 'contacts')

	const handleMenuClick = sectionId => {
		scrollToSection(sectionId)
		toggleVisible()
	}

	return (
		!isVisible && (
			<article className='mobileMenu' ref={mobileMenuRef}>
				<img className='mobileMenuLogo' src={LogoSvg} alt='YBS' />
				<div className='mobileMenuAnchorWrapper'>
					{navigationItems.map(item => (
						<button
							key={item.sectionId}
							type='button'
							className='mobileMenuAnchorButton'
							onClick={() => handleMenuClick(item.sectionId)}
						>
							{item.label}
						</button>
					))}
				</div>
				<div className='mobileMenuContactActions'>
					<a className='mobileMenuContactLink' href='tel:+79990860186'>
						<BsTelephoneOutboundFill aria-hidden='true' />
						<span>+7-999-086-01-86</span>
					</a>
					<a
						className='mobileMenuContactLink'
						href='https://t.me/ybs_one'
						target='_blank'
						rel='noreferrer'
					>
						<BsTelegram aria-hidden='true' />
						<span>Telegram</span>
					</a>
					<a
						className='mobileMenuContactLink'
						href='https://api.whatsapp.com/send/?phone=79990860186&text=%D0%A5%D0%BE%D1%87%D1%83+%D1%83+%D0%B2%D0%B0%D1%81+%D1%81%D0%B0%D0%B9%D1%82%21&type=phone_number&app_absent=0'
						target='_blank'
						rel='noreferrer'
					>
						<BsWhatsapp aria-hidden='true' />
						<span>WhatsApp</span>
					</a>
				</div>
				<ButtonsChangeLang />
			</article>
		)
	)
}

export default MobileMenu
