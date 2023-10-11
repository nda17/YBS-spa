import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import LogoSvg from '../../../public/images/YBS-white.svg'
import {
	BsTelephoneOutboundFill,
	BsWhatsapp,
	BsTelegram,
	BsBehance,
	BsEnvelopeAt,
	BsPeople
} from 'react-icons/bs'
import './Contacts.scss'
import '../../../assets/styles/media-queries.scss'

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
				<div className='contactsLineFirst col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
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
						<BsTelephoneOutboundFill className='contactsLineIcon' />
						<p className='contactsLineText'>{t('contactsPhone.text')}</p>
					</a>
				</div>
				<div className='contactsLine col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<a
						href='https://api.whatsapp.com/send/?phone=79990860186&text=%D0%A5%D0%BE%D1%87%D1%83+%D1%83+%D0%B2%D0%B0%D1%81+%D1%81%D0%B0%D0%B9%D1%82%21&type=phone_number&app_absent=0'
						target='_blank'
						className='contactsLineWrap'
					>
						<BsWhatsapp className='contactsLineIcon' />
						<p className='contactsLineText'>{t('contactsWa.text')}</p>
					</a>
				</div>
				<div className='contactsLine col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<a
						href='https://t.me/ybs_one'
						target='_blank'
						className='contactsLineWrap'
					>
						<BsTelegram className='contactsLineIcon' />
						<p className='contactsLineText'>{t('contactsTg.text')}</p>
					</a>
				</div>
				<div className='contactsLine col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<a
						href='https://www.behance.net/ybsone'
						target='_blank'
						className='contactsLineWrap'
					>
						<BsBehance className='contactsLineIcon' />
						<p className='contactsLineText'>{t('contactsBe.text')}</p>
					</a>
				</div>
				<div className='contactsLine col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<a
						href='mailto:mail@ybs.one'
						target='_blank'
						className='contactsLineWrap'
					>
						<BsEnvelopeAt className='contactsLineIcon' />
						<p className='contactsLineText'>
							{t('contactsEmailDevelopment.text')}
						</p>
					</a>
				</div>
				<div className='contactsLineLast col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<a
						href='mailto:mail@ybs.one'
						target='_blank'
						className='contactsLineWrap'
					>
						<BsPeople className='contactsLineIcon' />
						<p className='contactsLineText'>
							{t('contactsEmailPartners.text')}
						</p>
					</a>
				</div>
				<div className='circleAnimationWrapper'>
					<svg
						viewBox='0 0 200 200'
						width='200'
						height='200'
						xmlns='http://www.w3.org/2000/svg'
						className='link__svg'
						aria-labelledby='link1-title link1-desc'
					>
						<path
							id='link-circle'
							className='link__path'
							d='M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0'
							stroke='none'
							fill='none'
						/>
						<text className='link__text'>
							<textPath href='#link-circle' stroke='none'>
								Создаем ваши сайты и приложения!
							</textPath>
						</text>
					</svg>
					<img className='contactsLogoIcon' src={LogoSvg} alt='Logo' />
				</div>
			</article>
		</>
	)
}

export default Contacts
