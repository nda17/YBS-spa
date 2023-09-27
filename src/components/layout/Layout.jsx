import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { CookiePopup } from '../../components/ui/modal/CookiePopup'

const Layout = () => {
	return (
		<>
			<Header />
			<main className='main container-lg'>
				<CookiePopup />
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export { Layout }
