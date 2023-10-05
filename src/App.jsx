// import { Suspense } from 'react'
import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import './assets/styles/index.scss'
import './assets/fonts/fonts.scss'
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
