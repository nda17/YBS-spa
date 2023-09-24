import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	return (
		<div className='page'>
			<p className='titleNotFound'>
				ERROR: 404 - Not found!
				<br />
				Эта страница не существует.
				<br />
				Перейти на <Link to='/'>ГЛАВНУЮ СТРАНЦУ</Link>
			</p>
			<button className='btnGoBack' onClick={goBack}>
				Назад
			</button>
		</div>
	)
}

export { NotFoundPage }
