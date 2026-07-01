import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
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
				{ sectionId: 'portfolio', label: t('headerPortfolio.portfolio') },
				{ sectionId: 'calculate', label: t('headerCalculation.calculation') },
				{ sectionId: 'contacts', label: t('headerContacts.contacts') }
			]

	const handleMenuClick = sectionId => {
		scrollToSection(sectionId)
		toggleVisible()
	}

	return (
		!isVisible && (
			<article className='mobileMenu' ref={mobileMenuRef}>
				<img className='mobileMenuLogo' src={LogoSvg} alt='Logo image' />
				<div className='mobileMenuAnchorWrapper'>
					{menuItems.map(item => (
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
				<ButtonsChangeLang />
			</article>
		)
	)
}

export default MobileMenu
