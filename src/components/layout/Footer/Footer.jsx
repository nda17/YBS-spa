import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ButtonGoBack from '../../ui/buttons/ButtonGoBack'
import CookiePopup from '../../ui/modal/CookiePopup'
import LogoSvg from '../../../public/images/YBS-white.svg'
import {
	BsTelephoneOutboundFill,
	BsWhatsapp,
	BsTelegram,
	BsBehance,
	BsGithub
} from 'react-icons/bs'
import './Footer.scss'
import '../../../assets/styles/media-queries.scss'

const Footer = () => {
	const { t, i18n } = useTranslation()
	const [isHome, setHome] = useState(null) //Скрытие кнопки назад на главной странице
	const currentYear = new Date().getFullYear()
	const location = useLocation().pathname
	useEffect(() => {
		location === '/' ? setHome(true) : setHome(false)
	}, [location])
	useEffect(() => {
		//Animation logo
		let count = 0
		setInterval(function () {
			count === 360 ? (count = 0) : count--
			document.querySelector(
				'.footerLogoIcon'
			).style.transform = `rotate(${count}deg)`
		}, 40)
	}, [])
	return (
		<footer className='footer container-lg'>
			<nav className='row footerNav'>
				<div className='footerWrap col-12'>
					<a className='footerLogoWrap' href='https://ybs.one/'>
						<img className='footerLogoIcon' src={LogoSvg} alt='Logo' />
					</a>
					<div className='footerInfoTextWrap'>
						<p className='footerInfoTextFirst'>{`2022 - ${currentYear}`}</p>
						<p className='footerInfoTextSecond'>
							{t('allRightsReserved.text')}
						</p>
					</div>
					<div className='footerIconWrap'>
						<a
							href='tel:+79990860186'
							target='_blank'
							className='footerIconLink'
						>
							<BsTelephoneOutboundFill className='footerLinkIcon iconPhone' />
						</a>
						<a
							href='https://www.behance.net/ybsone'
							target='_blank'
							className='footerIconLink'
						>
							<BsBehance className='footerLinkIcon iconBehance' />
						</a>
						<a
							href='https://api.whatsapp.com/send/?phone=79990860186&text=%D0%A5%D0%BE%D1%87%D1%83+%D1%83+%D0%B2%D0%B0%D1%81+%D1%81%D0%B0%D0%B9%D1%82%21&type=phone_number&app_absent=0'
							target='_blank'
							className='footerIconLink'
						>
							<BsWhatsapp className='footerLinkIcon iconWhatsapp' />
						</a>
						<a
							href='https://t.me/ybs_one'
							target='_blank'
							className='footerIconLink'
						>
							<BsTelegram className='footerLinkIcon iconTelegram' />
						</a>
						<a
							href='https://github.com/nda17'
							target='_blank'
							className='footerIconLink'
						>
							<BsGithub className='footerLinkIcon iconGithub' />
						</a>
					</div>
				</div>
			</nav>
			{!isHome && <ButtonGoBack />}
			<CookiePopup />
		</footer>
	)
}

export default Footer
