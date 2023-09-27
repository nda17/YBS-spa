import { ButtonGoBack } from '../components/ui/buttons/ButtonGoBack'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
	return (
		<>
			<ButtonGoBack />
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

export { NotFoundPage }
