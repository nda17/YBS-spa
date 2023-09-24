import { ButtonGoBack } from '../components/ui/buttons/ButtonGoBack'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
	return (
		<div className='page'>
			<ButtonGoBack />
			<p className='titleNotFound'>
				ERROR: 404 - Not found!
				<br />
				Эта страница не существует.
				<br />
				Перейти на <Link to='/'>ГЛАВНУЮ СТРАНЦУ</Link>
			</p>
		</div>
	)
}

export { NotFoundPage }
