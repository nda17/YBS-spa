import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { CustomLink } from '../../ui/links/CustomLink'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { ButtonsChangeLang } from '../../ui/buttons/ButtonsChangeLang'
import './MobileMenu.scss'
import '../../../assets/styles/media-queries.scss'
import LogoSvg from '../../../public/images/YBS-white.svg'

const MobileMenu = props => {
	const { t, i18n } = useTranslation()
	const { isVisible, handleOpenHamburger = Function.prototype } = props //Состояние показан бургер или стрелка (открыто мобильное меню или нет), функция закрытия мобильного меню
	const mobileMenuRef = useRef(null)
	useClickOutside(mobileMenuRef, () => handleOpenHamburger()) //Закрытие мобильного меню при клике вне его блока
	return (
		!isVisible && (
			<article className='mobileMenu active' ref={mobileMenuRef}>
				<img className='mobileMenuLogo' src={LogoSvg} alt='Logo image' />
				<div className='mobileMenuCustomLinkWrapper'>
					<CustomLink
						to='/'
						className='mobileMenuCustomLink'
						onClick={() => handleOpenHamburger()}
					>
						{t('headerHome.home')}
					</CustomLink>
					<CustomLink
						to='/about'
						className='mobileMenuCustomLink'
						onClick={() => handleOpenHamburger()}
					>
						{t('headerAbout.about')}
					</CustomLink>
					<CustomLink
						to='/services'
						className='mobileMenuCustomLink'
						onClick={() => handleOpenHamburger()}
					>
						{t('headerServices.services')}
					</CustomLink>
					<CustomLink
						to='/calculate'
						className='mobileMenuCustomLink'
						onClick={() => handleOpenHamburger()}
					>
						{t('headerCalculation.calculation')}
					</CustomLink>
					<CustomLink
						to='/contacts'
						className='mobileMenuCustomLink'
						onClick={() => handleOpenHamburger()}
					>
						{t('headerContacts.contacts')}
					</CustomLink>
				</div>
				<ButtonsChangeLang />
			</article>
		)
	)
}

export { MobileMenu }
