import { useEffect } from 'react'
import LogoSvg from '../../../public/images/YBS-white.svg'
import PhoneSvg from '../../../public/icons/link-icon/phone-white.svg'
import WhatsAppSvg from '../../../public/icons/link-icon/wa-white.svg'
import TelegramSvg from '../../../public/icons/link-icon/tg-white.svg'
import BehanceSvg from '../../../public/icons/link-icon/be-white.svg'
import GithubSvg from '../../../public/icons/link-icon/gh-white.svg'
import './Footer.scss'
import '../../../assets/styles/media-queries.scss'
const currentYear = new Date().getFullYear()
const Footer = () => {
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
					<div className=''>
						<a className='footerLogoWrap' href='https://ybs.one/'>
							<img className='footerLogoIcon' src={LogoSvg} alt='Logo' />
						</a>
						<div className='footerInfoTextWrap'>
							<p className='footerInfoTextFirst'>
								{`2023 - ${new Date().getFullYear()}`}
							</p>
							<p className='footerInfoTextSecond'>All rights reserved</p>
						</div>
					</div>
					<div className='footerIconWrap'>
						<a href='tel:+79990860186' className='footerIconLink'>
							<img
								className='footerLinkIcon iconPhone'
								src={PhoneSvg}
								alt='Phone icon'
							/>
						</a>
						<a href='https://www.behance.net/ybsone' className='footerIconLink'>
							<img
								className='footerLinkIcon iconBehance'
								src={BehanceSvg}
								alt='Behance icon'
							/>
						</a>
						<a
							href='https://api.whatsapp.com/send/?phone=79990860186&text=%D0%A5%D0%BE%D1%87%D1%83+%D1%83+%D0%B2%D0%B0%D1%81+%D1%81%D0%B0%D0%B9%D1%82%21&type=phone_number&app_absent=0'
							className='footerIconLink'
						>
							<img
								className='footerLinkIcon iconWhatsapp'
								src={WhatsAppSvg}
								alt='WhatsApp icon'
							/>
						</a>
						<a href='https://t.me/ybs_one' className='footerIconLink'>
							<img
								className='footerLinkIcon iconTelegram'
								src={TelegramSvg}
								alt='Telegram icon'
							/>
						</a>
					</div>
				</div>
			</nav>
		</footer>
	)
}

export { Footer }
