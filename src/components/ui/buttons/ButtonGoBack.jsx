import { useNavigate } from 'react-router-dom'
import './ButtonGoBack.scss'

const ButtonGoBack = () => {
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	return (
		<button className='btnGoBack' onClick={goBack}>
			Назад
		</button>
	)
}

export { ButtonGoBack }
