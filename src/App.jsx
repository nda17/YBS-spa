import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/fonts/fonts.scss'
import './assets/styles/index.scss'
import Layout from './components/layout/Layout'
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const CalculatePricePage = lazy(() => import('./pages/CalculatePricePage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage'))

const App = () => {
	return (
		<>
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
		</>
	)
}

export { App }
