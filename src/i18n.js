import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enTranslation from './locales/en/translation.json'
import ruTranslation from './locales/ru/translation.json'
import ruRuTranslation from './locales/ru-RU/translation.json'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: import.meta.env.DEV,
		fallbackLng: 'en',
		supportedLngs: ['en', 'ru', 'ru-RU'],
		resources: {
			en: {
				translation: enTranslation
			},
			ru: {
				translation: ruTranslation
			},
			'ru-RU': {
				translation: ruRuTranslation
			}
		},
		interpolation: {
			escapeValue: false
		}
	})

export { i18n }
