import './ButtonsChangeLang.scss'
import i18n from 'i18next'

const locales = {
	en: { title: 'EN' },
	ru: { title: 'RU' }
}

const ButtonsChangeLang = () => {
	return (
		<ul className='buttonChangeLangWrap'>
			{Object.keys(locales).map(locale => (
				<li key={locale}>
					<button
						className='buttonChangeLang'
						style={{
							color:
								i18n.resolvedLanguage === locale
									? 'rgb(184, 134, 11)'
									: '#ffffff'
						}}
						onClick={() => i18n.changeLanguage(locale)}
					>
						{locales[locale].title}
					</button>
				</li>
			))}
		</ul>
	)
}

export { ButtonsChangeLang }
