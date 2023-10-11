import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Preloader from '../screens/Preloader'
import './Layout.scss'
import '../../assets/styles/media-queries.scss'

const Layout = () => {
	return (
		<>
			<Header />
			<main className='main container-lg'>
				<Suspense fallback={<Preloader />}>
					<Outlet />
				</Suspense>
			</main>
			<Footer />
		</>
	)
}

export default Layout
