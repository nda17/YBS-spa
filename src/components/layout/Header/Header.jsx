import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'
import LogoSvg from '../../../public/images/YBS-white.svg'
import {
	BsTelephoneOutboundFill,
	BsWhatsapp,
	BsTelegram
} from 'react-icons/bs'
import HamburgerMenu from './HamburgerMenu'
import MobileMenu from './MobileMenu'
import ButtonsChangeLang from '../../ui/buttons/ButtonsChangeLang'
import { useToggle } from '../../../hooks/useToggle'
import './Header.scss'
import '../../../assets/styles/media-queries.scss'

const Header = () => {
	const [isVisible, toggleVisible] = useToggle(true)
	const { t } = useTranslation()
	const logoRef = useRef(null)
	const navItems = [
		{ sectionId: 'home', label: t('headerHome.home') },
		{ sectionId: 'services', label: t('headerServices.services') },
		{ sectionId: 'portfolio', label: t('headerPortfolio.portfolio') },
		{ sectionId: 'calculate', label: t('headerCalculation.calculation') },
		{ sectionId: 'contacts', label: t('headerContacts.contacts') }
	]

	const scrollToSection = sectionId => {
		document.getElementById(sectionId)?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	}

	useEffect(() => {
		let count = 0
		const intervalId = setInterval(() => {
			count === 360 ? (count = 0) : count--
			if (logoRef.current) {
				logoRef.current.style.transform = `rotate3d(1, 1, 1, ${count}deg)`
			}
		}, 40)

		return () => clearInterval(intervalId)
	}, [])
	return (
		<header className='header container-lg'>
			<nav className='row headerNav'>
				<div className='headerWrap col-12 container-lg'>
					<a className='headerLogoWrap' href='https://ybs.one/' id='header'>
						<img
							className='headerLogoIcon'
							src={LogoSvg}
							alt='Logo'
							ref={logoRef}
						/>
					</a>
					<p className='headerCompanyNameText'>Your Business Site</p>
					<div className='headerListLinkWrap'>
						<ul className='headerLinkWrap headerAnchorList'>
							{navItems.map(item => (
								<li key={item.sectionId}>
									<button
										type='button'
										className='headerLink headerAnchorButton'
										onClick={() => scrollToSection(item.sectionId)}
									>
										{item.label}
									</button>
								</li>
							))}
						</ul>
						<div className='headerIconWrap'>
							<a
								href='tel:+79990860186'
								className='headerIconLink'
								target='_blank'
								rel='noreferrer'
							>
								<BsTelephoneOutboundFill className='headerIconLinkContent iconPhone' />
							</a>
							<a
								href='https://api.whatsapp.com/send/?phone=79990860186&text=%D0%A5%D0%BE%D1%87%D1%83+%D1%83+%D0%B2%D0%B0%D1%81+%D1%81%D0%B0%D0%B9%D1%82%21&type=phone_number&app_absent=0'
								target='_blank'
								rel='noreferrer'
								className='headerIconLink'
							>
								<BsWhatsapp className='headerIconLinkContent iconWhatsapp' />
							</a>
							<a
								href='https://t.me/ybs_one'
								target='_blank'
								rel='noreferrer'
								className='headerIconLink'
							>
								<BsTelegram className='headerIconLinkContent iconTelegram' />
							</a>
						</div>
						<ButtonsChangeLang />
					</div>
					<HamburgerMenu isVisible={isVisible} toggleVisible={toggleVisible} />
					<MobileMenu
						isVisible={isVisible}
						toggleVisible={toggleVisible}
						navItems={navItems}
						scrollToSection={scrollToSection}
					/>
				</div>
			</nav>
		</header>
	)
}

export default Header
