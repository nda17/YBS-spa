import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import './ButtonGoBack.scss'

const ButtonGoBack = () => {
	const { t, i18n } = useTranslation()
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	return (
		<button className='btnGoBack' onClick={goBack}>
			{t('buttonGoBack.text')}
		</button>
	)
}

export { ButtonGoBack }
