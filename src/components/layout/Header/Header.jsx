import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { CustomLink } from '../../ui/links/CustomLink'
import LogoSvg from '../../../public/images/YBS-white.svg'
import PhoneSvg from '../../../public/icons/link-icon/phone-white.svg'
import WhatsAppSvg from '../../../public/icons/link-icon/wa-white.svg'
import TelegramSvg from '../../../public/icons/link-icon/tg-white.svg'
import BehanceSvg from '../../../public/icons/link-icon/be-white.svg'
import './Header.scss'
import '../../../assets/styles/media-queries.scss'
import { HamburgerMenu } from './HamburgerMenu'
import { MobileMenu } from './MobileMenu'
import { ButtonsChangeLang } from '../../ui/buttons/ButtonsChangeLang'


import { useToggle } from '../../../hooks/useToggle'

const Header = () => {

	const [isVisible, setVisible] = useToggle(true)
	const handleOpenHamburger = () => {
		setVisible(!isVisible)
	}


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
								<CustomLink to='/calculate' className='CustomLink'>
									{t('headerCalculation.calculation')}
								</CustomLink>
							</li>
						</ul>
						<ul className='CustomLinkWrap'>
							<li>
								<CustomLink to='/about' className='CustomLink'>
									{t('headerAbout.about')}
								</CustomLink>
								<CustomLink to='/contacts' className='CustomLink'>
									{t('headerContacts.contacts')}
								</CustomLink>
							</li>
						</ul>
						<div className='headerIconWrap'>
							<a href='tel:+79990860186' className='headerIconLink'>
								<img
									className='headerIconLinkContent iconPhone'
									src={PhoneSvg}
									alt='Phone icon'
								/>
							</a>
							<a
								href='https://www.behance.net/ybsone'
								className='headerIconLink'
							>
								<img
									className='headerIconLinkContent iconBehance'
									src={BehanceSvg}
									alt='Behance icon'
								/>
							</a>
							<a
								href='https://api.whatsapp.com/send/?phone=79990860186&text=%D0%A5%D0%BE%D1%87%D1%83+%D1%83+%D0%B2%D0%B0%D1%81+%D1%81%D0%B0%D0%B9%D1%82%21&type=phone_number&app_absent=0'
								className='headerIconLink'
							>
								<img
									className='headerIconLinkContent iconWhatsapp'
									src={WhatsAppSvg}
									alt='WhatsApp icon'
								/>
							</a>
							<a href='https://t.me/ybs_one' className='headerIconLink'>
								<img
									className='headerIconLinkContent iconTelegram'
									src={TelegramSvg}
									alt='Telegram icon'
								/>
							</a>
						</div>
						<ButtonsChangeLang />
					</div>
					<HamburgerMenu
						isVisible={isVisible}
						handleOpenHamburger={handleOpenHamburger}
					/>
					<MobileMenu
						isVisible={isVisible}
						handleOpenHamburger={handleOpenHamburger}
					/>
				</div>
			</nav>
		</header>
	)
}

export { Header }
