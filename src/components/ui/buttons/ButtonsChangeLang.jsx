import i18n from 'i18next'
import './ButtonsChangeLang.scss'
import '../../../assets/styles/media-queries.scss'

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
						color: i18n.resolvedLanguage === locale ? '#b8860b' : '#ffffff'
					}}
					onClick={() => i18n.changeLanguage(locale)}
				>
					{locales[locale].title}
				</button>
			))}
		</div>
	)
}

export default ButtonsChangeLang
