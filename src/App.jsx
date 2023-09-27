import { Suspense } from 'react'


import { Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Homepage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { ContactsPage } from './pages/ContactsPage'
import { CalculatePricePage } from './pages/CalculatePricePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { Layout } from './components/layout/Layout'
import './assets/styles/index.scss'
import './assets/fonts/fonts.scss'

const App = () => {
	return (
		<>
			<Suspense fallback='Loading'>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Homepage />} />
						<Route path='about' element={<AboutPage />} />
						<Route path='services' element={<ServicesPage />} />
						<Route path='calculate' element={<CalculatePricePage />} />
						<Route path='contacts' element={<ContactsPage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Route>
				</Routes>
			</Suspense>
		</>
	)
}


export { App }
