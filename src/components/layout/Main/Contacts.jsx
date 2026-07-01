import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'
import LogoSvg from '../../../public/images/YBS-white.svg'
import {
	BsTelephoneOutboundFill,
	BsWhatsapp,
	BsTelegram,
	BsEnvelopeAt,
	BsPeople
} from 'react-icons/bs'
import './Contacts.scss'
import '../../../assets/styles/media-queries.scss'

const Contacts = () => {
	const { t } = useTranslation()
	const logoRef = useRef(null)
	const titleRef = useRef(null)
	const telegramChannelUrl = 'https://t.me/ybs_one_site'
	const contactItems = [
		{
			className: 'contactsLineFirst',
			href: 'https://ybs.one/',
			icon: <img className='contactsLineIcon' src={LogoSvg} alt='' />,
			text: t('contactsCompany.text')
		},
		{
			className: 'contactsLine',
			href: 'tel:+79990860186',
			icon: <BsTelephoneOutboundFill className='contactsLineIcon' />,
			text: t('contactsPhone.text')
		},
		{
			className: 'contactsLine',
			href: 'https://api.whatsapp.com/send/?phone=79990860186&text=%D0%A5%D0%BE%D1%87%D1%83+%D1%83+%D0%B2%D0%B0%D1%81+%D1%81%D0%B0%D0%B9%D1%82%21&type=phone_number&app_absent=0',
			icon: <BsWhatsapp className='contactsLineIcon' />,
			text: t('contactsWa.text')
		},
		{
			className: 'contactsLine',
			href: 'https://t.me/ybs_one',
			icon: <BsTelegram className='contactsLineIcon' />,
			text: t('contactsTg.text')
		},
		{
			className: 'contactsLine',
			href: 'mailto:zakaz@ybs.one',
			icon: <BsEnvelopeAt className='contactsLineIcon' />,
			text: t('contactsEmailDevelopment.text')
		},
		{
			className: 'contactsLineLast',
			href: 'mailto:mail@ybs.one',
			icon: <BsPeople className='contactsLineIcon' />,
			text: t('contactsEmailPartners.text')
		}
	]

	useEffect(() => {
		const timerId = setTimeout(() => {
			if (titleRef.current) {
				titleRef.current.style.opacity = '1'
			}
		}, 1000)

		return () => clearTimeout(timerId)
	}, [])

	useEffect(() => {
		let count = 0
		const intervalId = setInterval(() => {
			count === 360 ? (count = 0) : count--
			if (logoRef.current) {
				logoRef.current.style.transform = `rotate(${count}deg)`
			}
		}, 20)

		return () => clearInterval(intervalId)
	}, [])
	return (
		<>
			<h3
				className='sectionTitle sectionTitleDelayed animatedTitleFlicker'
				ref={titleRef}
			>
				{t('contactsTitle.text')}
			</h3>
			<article className='row contactsLineBlock'>
				<div className='contactsBrandBlock'>
					<div className='circleAnimationWrapper' aria-hidden='true'>
						<svg
							viewBox='0 0 200 200'
							width='200'
							height='200'
							xmlns='http://www.w3.org/2000/svg'
							className='link__svg'
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
									{t('contactsSlogan.text')}
								</textPath>
							</text>
						</svg>
						<img
							className='contactsLogoIcon'
							src={LogoSvg}
							alt=''
							ref={logoRef}
						/>
					</div>
					<a
						className='contactsCompanyLabel contactsCompanyLink'
						href={telegramChannelUrl}
						target='_blank'
						rel='noreferrer'
					>
						{t('contactsTelegramChannel.text')}
					</a>
					<p className='contactsSloganText'>{t('contactsSlogan.text')}</p>
				</div>
				<div className='contactsCardsGrid' aria-label={t('contactsTitle.text')}>
					{contactItems.map(item => (
						<a
							className={`contactsLineWrap ${item.className}`}
							href={item.href}
							target='_blank'
							rel='noreferrer'
							key={item.text}
						>
							<span className='contactsLineIconBox'>{item.icon}</span>
							<span className='contactsLineText'>{item.text}</span>
						</a>
					))}
				</div>
			</article>
		</>
	)
}

export default Contacts
