import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BiSolidCookie } from 'react-icons/bi'
import '../../../assets/styles/media-queries.scss'
import './CookiePopup.scss'

function CookiePopup() {
	const { t, i18n } = useTranslation()
	const [addClass, setAddClass] = useState(false)
	const executeDataCookies = () => {
		if (document.cookie.includes('cookieYBSData')) {
			return
		} else {
			setAddClass(true)
		}
	}
	const acceptBtnClick = () => {
		document.cookie =
			'cookieYBS=cookieYBSData; SameSite=Lax; max-age=' + 60 * 60 * 24 * 365
		setAddClass(false)
	}
	const declineBtnClick = () => {
		setAddClass(false)
	}
	useEffect(() => {
		executeDataCookies()
	}, [])
	return (
		<div className={`cookiePopupWrap ${addClass ? 'show' : 'hidden'}`}>
			<div className='cookiePopupTitleWrap'>
				<BiSolidCookie className='cookiePopupTitleIcon' color='#dd850b' />
				<h2 className='cookiePopupTitleText'>Cookies Consent</h2>
			</div>
			<p className='cookiePopupText'>{t('coockieAlert.text')}</p>
			<div className='cookiePopupBtnWrap'>
				<button onClick={acceptBtnClick} className='cookiePopupBtnAccept'>
					<p>{t('coockieAlertAccept.text')}</p>
				</button>
				<button onClick={declineBtnClick} className='cookiePopupBtnDecline'>
					<p>{t('coockieAlertClose.text')}</p>
				</button>
			</div>
		</div>
	)
}

export default CookiePopup
