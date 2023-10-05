import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { CookiePopup } from '../../components/ui/modal/CookiePopup'
import { Suspense } from 'react'
import { Preloader } from '../screens/Preloader'

const Layout = () => {
	return (
		<>
			<Header />
			<main className='main container-lg'>
				<Suspense fallback={<Preloader />}>
					<Outlet />
					<CookiePopup />
				</Suspense>
			</main>
			<Footer />
		</>
	)
}

export default Layout
