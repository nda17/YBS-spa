import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { ButtonGoBack } from '../../components/ui/buttons/ButtonGoBack'
import { CookiePopup } from '../../components/ui/modal/CookiePopup'

const Layout = () => {
	return (
		<>
			<Header />
			<main className='main container-lg'>
				<CookiePopup />
				<ButtonGoBack />
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export { Layout }
