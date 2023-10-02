import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { GalleryPage } from './pages/GalleryPage'
import { CalculatePricePage } from './pages/CalculatePricePage'
import { ContactsPage } from './pages/ContactsPage'
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
						<Route index element={<HomePage />} />
						<Route path='services' element={<ServicesPage />} />
						<Route path='gallery' element={<GalleryPage />} />
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
