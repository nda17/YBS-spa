import { useNavigate } from 'react-router-dom'
import { CardServices } from '../components/Main/CardServices'

const ServicesPage = () => {
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	return (
		<div className='page'>
			<CardServices />
			<button className='btnGoBack' onClick={goBack}>
				Назад
			</button>
		</div>
	)
}

export { ServicesPage }
