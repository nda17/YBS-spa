import { Link } from 'react-router-dom'

const NotFoundPage = () => {
	return (
		<>
			<p className='titleNotFound'>
				ERROR: 404 - Not found!
				<br />
				Страница не существует.
				<br />
				Перейти на <Link to='/'>ГЛАВНУЮ СТРАНЦУ</Link>
			</p>
		</>
	)
}

export default NotFoundPage
