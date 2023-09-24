import { useNavigate } from 'react-router-dom'
import { FormMain } from '../components/Main/FormMain'

const CalculatePricePage = () => {
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	return (
		<div className='page'>
			<FormMain />
			<button className='btnGoBack' onClick={goBack}>
				Назад
			</button>
		</div>
	)
}

export { CalculatePricePage }
