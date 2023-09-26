import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import './CookiePopup.scss'
import '../../../assets/styles/media-queries.scss'

function CookiePopup() {
	const { t, i18n } = useTranslation()
	const [addClass, setAddClass] = useState(false)
	useEffect(() => {
		executeCodes()
	}, [])
	const executeCodes = () => {
		if (document.cookie.includes('cookieYbsSite')) {
			return
		} else {
			setAddClass(true)
		}
	}
	const acceptBtnClick = () => {
		document.cookie = 'cookieBy= cookieYbsSite; max-age=' + 60 * 60 * 24 * 365
		setAddClass(false)
	}
	const declineBtnClick = () => {
		setAddClass(false)
	}
	return (
		<div className={`cookie-popup-wrap ${addClass ? 'show' : ''}`}>
			<header className='header-popup-cookie'>
				<i className='bx bx-cookie'></i>
				<h2>Cookies Consent</h2>
			</header>
			<div className='data'>
				<p>{t('coockieAlert.text')}</p>
			</div>
			<div className='buttons-cookie'>
				<button
					onClick={acceptBtnClick}
					className='button-cookie-popup'
					id='acceptBtn'
				>
					<p>{t('coockieAlertAccept.text')}</p>
				</button>
				<button
					onClick={declineBtnClick}
					className='button-cookie-popup'
					id='declineBtn'
				>
					<p>{t('coockieAlertClose.text')}</p>
				</button>
			</div>
		</div>
	)
}

export { CookiePopup }
