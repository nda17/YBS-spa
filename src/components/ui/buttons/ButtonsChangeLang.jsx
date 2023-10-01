import './ButtonsChangeLang.scss'
import i18n from 'i18next'

const ButtonsChangeLang = () => {
	const locales = {
		en: { title: 'EN' },
		ru: { title: 'RU' }
	}
	return (
		<div className='buttonChangeLangWrap'>
			{Object.keys(locales).map(locale => (
				<button
					key={locale}
					className='buttonChangeLang'
					style={{
						color:
							i18n.resolvedLanguage === locale ? 'rgb(184, 134, 11)' : '#ffffff'
					}}
					onClick={() => i18n.changeLanguage(locale)}
				>
					{locales[locale].title}
				</button>
			))}
		</div>
	)
}

export { ButtonsChangeLang }
