import { useState, useEffect } from 'react';
import styles from './CookiePopup.scss';
import '../../assets/styles/media-queries.scss'

function CookiePopup() {
	const [addClass, setAddClass] = useState(false);

	useEffect(() => {
		executeCodes();
	}, []);

	const executeCodes = () => {
		if (document.cookie.includes('cookieYbsSite')) {
			return;
		} else {
			setAddClass(true);
		}
	};

	const acceptBtnClick = () => {
		document.cookie = 'cookieBy= cookieYbsSite; max-age=' + 60 * 60 * 24 * 365;
		setAddClass(false);
	};

	const declineBtnClick = () => {
		setAddClass(false);
	};
	return (
		<div className={`cookie-popup-wrap ${addClass ? 'show' : ''}`}>
			<header className='header-popup-cookie'>
				<i className='bx bx-cookie'></i>
				<h2>Cookies Consent</h2>
			</header>
			<div className='data'>
				<p>
					Мы используем cookie-файлы, чтобы получить статистику, с целью
					персонализации сервисов и предложений. Продолжая пользоваться сайтом
					без изменения настроек, вы даёте согласие на использование
					cookie-файлов.
				</p>
			</div>
			<div className='buttons-cookie'>
				<button
					onClick={acceptBtnClick}
					className='button-cookie-popup'
					id='acceptBtn'
				>
					Принять
				</button>
				<button
					onClick={declineBtnClick}
					className='button-cookie-popup'
					id='declineBtn'
				>
					Закрыть
				</button>
			</div>
		</div>
	);
}

export { CookiePopup };
