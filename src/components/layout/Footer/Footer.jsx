import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import CookiePopup from '../../ui/modal/CookiePopup'
import LogoSvg from '../../../public/images/YBS-white.svg'
import {
	BsTelephoneOutboundFill,
	BsWhatsapp,
	BsTelegram
} from 'react-icons/bs'
import './Footer.scss'
import '../../../assets/styles/media-queries.scss'

const Footer = () => {
	const { t } = useTranslation()
	const currentYear = new Date().getFullYear()
	const logoRef = useRef(null)

	useEffect(() => {
		let count = 0
		const intervalId = setInterval(() => {
			count === 360 ? (count = 0) : count--
			if (logoRef.current) {
				logoRef.current.style.transform = `rotate(${count}deg)`
			}
		}, 40)

		return () => clearInterval(intervalId)
	}, [])
	return (
		<footer className='footer container-lg'>
			<nav className='row footerNav'>
				<div className='footerWrap col-12 container-lg'>
					<a className='footerLogoWrap' href='https://ybs.one/'>
						<img
							className='footerLogoIcon'
							src={LogoSvg}
							alt='Logo'
							ref={logoRef}
						/>
					</a>
					<div className='footerInfoTextWrap'>
						<p className='footerInfoTextFirst'>{`2022 - ${currentYear}`}</p>
						<p className='footerInfoTextSecond'>
							{t('allRightsReserved.text')}
						</p>
						<p className='footerOfferDisclaimer'>
							{t('footerOfferDisclaimer.text')}
						</p>
					</div>
					<div className='footerIconWrap'>
						<a
							href='tel:+79990860186'
							target='_blank'
							rel='noreferrer'
							className='footerIconLink'
						>
							<BsTelephoneOutboundFill className='footerLinkIcon iconPhone' />
						</a>
						<a
							href='https://api.whatsapp.com/send/?phone=79990860186&text=%D0%A5%D0%BE%D1%87%D1%83+%D1%83+%D0%B2%D0%B0%D1%81+%D1%81%D0%B0%D0%B9%D1%82%21&type=phone_number&app_absent=0'
							target='_blank'
							rel='noreferrer'
							className='footerIconLink'
						>
							<BsWhatsapp className='footerLinkIcon iconWhatsapp' />
						</a>
						<a
							href='https://t.me/ybs_one'
							target='_blank'
							rel='noreferrer'
							className='footerIconLink'
						>
							<BsTelegram className='footerLinkIcon iconTelegram' />
						</a>
					</div>
				</div>
			</nav>
			<CookiePopup />
		</footer>
	)
}

export default Footer
