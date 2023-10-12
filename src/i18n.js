import i18n, { changeLanguage } from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		defaultLocale: 'ru',
		fallbackLng: 'en',
		//TODO: Development server paths locales
		backend: {
			loadPath: 'src/locales/{{lng}}/translation.json'
		}
		//TODO: Hosting paths locales
		// backend: {
		// 	loadPath:
		// 		'locales/{{lng}}/translation.json'
		// }
	})

export { i18n }
