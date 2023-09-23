import { Link } from "react-router-dom"
import './NotFoundPage.scss'

const NotFoundPage = () => {
	return (
		<p className='titleNotFound'>
			ERROR: 404 - Not found! 
			<br />
			Эта страница не существует. 
			<br />
			Перейти на <Link to='/'>ГЛАВНУЮ СТРАНЦУ</Link>
		</p>
	)
}

export { NotFoundPage }
