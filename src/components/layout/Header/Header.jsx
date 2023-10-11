import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import CustomLink from '../../ui/links/CustomLink'
import LogoSvg from '../../../public/images/YBS-white.svg'
import {
	BsTelephoneOutboundFill,
	BsWhatsapp,
	BsTelegram,
	BsBehance
} from 'react-icons/bs'
import HamburgerMenu from './HamburgerMenu'
import MobileMenu from './MobileMenu'
import ButtonsChangeLang from '../../ui/buttons/ButtonsChangeLang'
import { useToggle } from '../../../hooks/useToggle'
import './Header.scss'
import '../../../assets/styles/media-queries.scss'

const Header = () => {
	const [isVisible, toggleVisible] = useToggle(true)
	const { t, i18n } = useTranslation()
	useEffect(() => {
		//Animation logo
		let count = 0
		setInterval(function () {
			count === 360 ? (count = 0) : count--
			document.querySelector(
				'.headerLogoIcon'
			).style.transform = `rotate3d(1, 1, 1, ${count}deg)`
		}, 40)
	}, [])
	return (
		<header className='header container-lg'>
			<nav className='row headerNav'>
				<div className='headerWrap col-12'>
					<a className='headerLogoWrap' href='https://ybs.one/' id='header'>
						<img className='headerLogoIcon' src={LogoSvg} alt='Logo' />
					</a>
					<p className='headerCompanyNameText'>Your Business Site</p>
					<div className='headerListLinkWrap'>
						<ul className='CustomLinkWrap'>
							<li>
								<CustomLink to='/' className='CustomLink'>
									{t('headerHome.home')}
								</CustomLink>
							</li>
						</ul>
						<ul className='CustomLinkWrap'>
							<li>
								<CustomLink to='/services' className='CustomLink'>
									{t('headerServices.services')}
								</CustomLink>
								<CustomLink to='/gallery' className='CustomLink'>
									{t('headerGallery.gallery')}
								</CustomLink>
							</li>
						</ul>
						<ul className='CustomLinkWrap'>
							<li>
								<CustomLink to='/calculate' className='CustomLink'>
									{t('headerCalculation.calculation')}
								</CustomLink>
								<CustomLink to='/contacts' className='CustomLink'>
									{t('headerContacts.contacts')}
								</CustomLink>
							</li>
						</ul>
						<div className='headerIconWrap'>
							<a
								href='tel:+79990860186'
								className='headerIconLink'
								target='_blank'
							>
								<BsTelephoneOutboundFill className='headerIconLinkContent iconPhone' />
							</a>
							<a
								href='https://www.behance.net/ybsone'
								target='_blank'
								className='headerIconLink'
							>
								<BsBehance className='headerIconLinkContent iconBehance' />
							</a>
							<a
								href='https://api.whatsapp.com/send/?phone=79990860186&text=%D0%A5%D0%BE%D1%87%D1%83+%D1%83+%D0%B2%D0%B0%D1%81+%D1%81%D0%B0%D0%B9%D1%82%21&type=phone_number&app_absent=0'
								target='_blank'
								className='headerIconLink'
							>
								<BsWhatsapp className='headerIconLinkContent iconWhatsapp' />
							</a>
							<a
								href='https://t.me/ybs_one'
								target='_blank'
								className='headerIconLink'
							>
								<BsTelegram className='headerIconLinkContent iconTelegram' />
							</a>
						</div>
						<ButtonsChangeLang />
					</div>
					<HamburgerMenu isVisible={isVisible} toggleVisible={toggleVisible} />
					<MobileMenu isVisible={isVisible} toggleVisible={toggleVisible} />
				</div>
			</nav>
		</header>
	)
}

export default Header
