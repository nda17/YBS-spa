import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BiSolidCookie } from 'react-icons/bi'
import './CookiePopup.scss'

const COOKIE_NAME = 'cookieYBS'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

function CookiePopup() {
	const { t } = useTranslation()
	const [shouldRender, setShouldRender] = useState(false)
	const [isVisible, setIsVisible] = useState(false)

	const acceptBtnClick = () => {
		document.cookie =
			`${COOKIE_NAME}=cookieYBSData; SameSite=Lax; Max-Age=${COOKIE_MAX_AGE}; Path=/`
		setIsVisible(false)
	}

	const declineBtnClick = () => {
		setIsVisible(false)
	}

	useEffect(() => {
		const isCookieAccepted = document.cookie
			.split('; ')
			.some(cookieItem => cookieItem.startsWith(`${COOKIE_NAME}=`))

		if (isCookieAccepted) {
			return
		}

		const showPopup = () => {
			setShouldRender(true)
			requestAnimationFrame(() => setIsVisible(true))
		}

		if ('requestIdleCallback' in window) {
			const idleId = window.requestIdleCallback(showPopup, { timeout: 3000 })

			return () => window.cancelIdleCallback(idleId)
		}

		const timerId = setTimeout(showPopup, 1800)

		return () => clearTimeout(timerId)
	}, [])

	if (!shouldRender) {
		return null
	}

	return (
		<div
			className={`cookiePopupWrap ${
				isVisible ? 'cookiePopupWrapVisible' : ''
			}`}
			role='dialog'
			aria-live='polite'
			aria-label='Cookies'
			aria-hidden={!isVisible}
		>
			<div className='cookiePopupTitleWrap'>
				<BiSolidCookie className='cookiePopupTitleIcon' aria-hidden='true' />
				<h2 className='cookiePopupTitleText'>Cookies</h2>
			</div>
			<p className='cookiePopupText'>{t('coockieAlert.text')}</p>
			<div className='cookiePopupBtnWrap'>
				<button
					type='button'
					onClick={acceptBtnClick}
					className='cookiePopupBtnAccept'
				>
					<p>{t('coockieAlertAccept.text')}</p>
				</button>
				<button
					type='button'
					onClick={declineBtnClick}
					className='cookiePopupBtnDecline'
				>
					<p>{t('coockieAlertClose.text')}</p>
				</button>
			</div>
		</div>
	)
}

export default CookiePopup
