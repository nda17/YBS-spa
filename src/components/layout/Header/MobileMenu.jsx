import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import CustomLink from '../../ui/links/CustomLink'
import { useClickOutside } from '../../../hooks/useClickOutside'
import ButtonsChangeLang from '../../ui/buttons/ButtonsChangeLang'
import LogoSvg from '../../../public/images/YBS-white.svg'
import './MobileMenu.scss'
import '../../../assets/styles/media-queries.scss'

const MobileMenu = props => {
	const { t, i18n } = useTranslation()
	const { isVisible, toggleVisible = Function.prototype } = props //Состояние показан бургер или стрелка (открыто мобильное меню или нет), функция закрытия мобильного меню
	const mobileMenuRef = useRef(null)
	useClickOutside(mobileMenuRef, toggleVisible) //Закрытие мобильного меню при клике вне его блока
	return (
		!isVisible && (
			<article className='mobileMenu' ref={mobileMenuRef}>
				<img className='mobileMenuLogo' src={LogoSvg} alt='Logo image' />
				<div className='mobileMenuCustomLinkWrapper'>
					<CustomLink
						to='/'
						className='mobileMenuCustomLink'
						onClick={toggleVisible}
					>
						{t('headerHome.home')}
					</CustomLink>
					<CustomLink
						to='/services'
						className='mobileMenuCustomLink'
						onClick={toggleVisible}
					>
						{t('headerServices.services')}
					</CustomLink>
					<CustomLink
						to='/gallery'
						className='mobileMenuCustomLink'
						onClick={toggleVisible}
					>
						{t('headerGallery.gallery')}
					</CustomLink>
					<CustomLink
						to='/calculate'
						className='mobileMenuCustomLink'
						onClick={toggleVisible}
					>
						{t('headerCalculation.calculation')}
					</CustomLink>
					<CustomLink
						to='/contacts'
						className='mobileMenuCustomLink'
						onClick={toggleVisible}
					>
						{t('headerContacts.contacts')}
					</CustomLink>
				</div>
				<ButtonsChangeLang />
			</article>
		)
	)
}

export default MobileMenu
