import { Link, useMatch } from 'react-router-dom'
import './CustomLink.scss'
import '../../../assets/styles/media-queries.scss'

const CustomLink = ({ children, to, ...props }) => {
	const match = useMatch(to)
	return (
		<Link
			className='CustomLink'
			to={to}
			style={{
				color: match ? '#b8860b' : '#ffffff'
			}}
			{...props}
		>
			{children}
		</Link>
	)
}

export default CustomLink 
