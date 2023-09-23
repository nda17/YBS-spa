import { Outlet } from 'react-router-dom'
import { NavigationMenu } from './Header/NavigationMenu'
import { Footer } from './Footer/Footer'
import './Layout.scss'

const Layout = () => {
	return (
		<>
			<header className='header container-lg'>
				<NavigationMenu />
			</header>
			<main className='main container-lg'>
				<Outlet />
			</main>
			<footer className='footer container-lg'>
				<Footer />
			</footer>
		</>
	)
}

export { Layout }
