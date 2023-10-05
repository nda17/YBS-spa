import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import LogoSvg from '../../../public/images/YBS-white.svg'
import PhoneSvg from '../../../public/icons/link-icon/phone-white.svg'
import WhatsAppSvg from '../../../public/icons/link-icon/wa-white.svg'
import TelegramSvg from '../../../public/icons/link-icon/tg-white.svg'
import BehanceSvg from '../../../public/icons/link-icon/be-white.svg'
import EmailSvg from '../../../public/icons/link-icon/email-white.svg'
import './Contacts.scss'

const Contacts = () => {
	const { t, i18n } = useTranslation()
	const [show, setShow] = useState(false)
	useEffect(() => {
		const textElement = document.querySelector('.title')
		setTimeout(() => {
			setShow(true)
			textElement.style.opacity = '1'
		}, 1000)
	}, [show])
	useEffect(() => {
		//Animation logo
		let count = 0
		setInterval(function () {
			count === 360 ? (count = 0) : count--
			document.querySelector(
				'.contactsLogoIcon'
			).style.transform = `rotate(${count}deg)`
		}, 20)
	}, [])
	return (
		<>
			<h3 className='title'>{t('contactsTitle.text')}</h3>
			<article className='row contactsLineBlock'>
				<div className='contactsLine contactsLineFirst col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<a className='contactsLineWrap' href='https://ybs.one/'>
						<img className='contactsLineIcon' src={LogoSvg} alt='Logo' />
						<p className='contactsLineText'>{t('contactsCompany.text')}</p>
					</a>
				</div>
				<div className='contactsLine col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<a
						href='tel:+79990860186'
						className='contactsLineWrap'
						target='_blank'
					>
						<img className='contactsLineIcon' src={PhoneSvg} alt='Phone icon' />
						<p className='contactsLineText'>{t('contactsPhone.text')}</p>
					</a>
				</div>
				<div className='contactsLine col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<a
						href='https://api.whatsapp.com/send/?phone=79990860186&text=%D0%A5%D0%BE%D1%87%D1%83+%D1%83+%D0%B2%D0%B0%D1%81+%D1%81%D0%B0%D0%B9%D1%82%21&type=phone_number&app_absent=0'
						target='_blank'
						className='contactsLineWrap'
					>
						<img
							className='contactsLineIcon'
							src={WhatsAppSvg}
							alt='WhatsApp icon'
						/>
						<p className='contactsLineText'>{t('contactsWa.text')}</p>
					</a>
				</div>
				<div className='contactsLine col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<a
						href='https://t.me/ybs_one'
						target='_blank'
						className='contactsLineWrap'
					>
						<img
							className='contactsLineIcon'
							src={TelegramSvg}
							alt='Telegram icon'
						/>
						<p className='contactsLineText'>{t('contactsTg.text')}</p>
					</a>
				</div>
				<div className='contactsLine col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<a
						href='https://www.behance.net/ybsone'
						target='_blank'
						className='contactsLineWrap'
					>
						<img
							className='contactsLineIcon'
							src={BehanceSvg}
							alt='Behance icon'
						/>
						<p className='contactsLineText'>{t('contactsBe.text')}</p>
					</a>
				</div>
				<div className='contactsLine contactsLineLast col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<a
						href='mailto:mail@ybs.one'
						target='_blank'
						className='contactsLineWrap'
					>
						<img className='contactsLineIcon' src={EmailSvg} alt='Email icon' />
						<p className='contactsLineText'>{t('contactsEmail.text')}</p>
					</a>
				</div>
				<img className='contactsLogoIcon' src={LogoSvg} alt='Logo' />
				<p className='contactsLogoSlogan'>{t('contactsSlogan.text')}</p>
			</article>
		</>
	)
}

export default Contacts
