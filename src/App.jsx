import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './assets/fonts/fonts.scss'
import './assets/styles/index.scss'
import Layout from './components/layout/Layout'
const HomePage = lazy(() => import('./pages/Homepage'))

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='*' element={<Navigate to='/' replace />} />
				</Route>
			</Routes>
		</>
	)
}

export { App }
