import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'

const Layout = () => {
	return (
		<>
			<Header />
			<main className='main container-lg'>
				<Outlet />
			</main>
			<Footer />

		</>
	)
}

export { Layout }
