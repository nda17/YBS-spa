import { Outlet } from 'react-router-dom'
import { Suspense, useEffect, useRef } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Preloader from '../screens/Preloader'
import './Layout.scss'
import '../../assets/styles/media-queries.scss'

const Layout = () => {
	const mainRef = useRef(null)

	useEffect(() => {
		const mainElement = mainRef.current
		if (!mainElement) {
			return
		}
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return
		}

		let frameId = null
		const updateParallax = () => {
			const scrollTop = window.scrollY || document.documentElement.scrollTop
			const scrollDistance =
				document.documentElement.scrollHeight - window.innerHeight
			const scrollProgress =
				scrollDistance > 0 ? Math.min(scrollTop / scrollDistance, 1) : 0

			mainElement.style.setProperty('--pageScrollProgress', scrollProgress)
			mainElement.style.setProperty(
				'--pageParallaxSlow',
				`${Math.round(scrollTop * -0.06)}px`
			)
			mainElement.style.setProperty(
				'--pageParallaxFast',
				`${Math.round(scrollTop * -0.14)}px`
			)
			frameId = null
		}
		const requestUpdate = () => {
			if (frameId === null) {
				frameId = requestAnimationFrame(updateParallax)
			}
		}

		updateParallax()
		window.addEventListener('scroll', requestUpdate, { passive: true })
		window.addEventListener('resize', requestUpdate)

		return () => {
			window.removeEventListener('scroll', requestUpdate)
			window.removeEventListener('resize', requestUpdate)
			if (frameId !== null) {
				cancelAnimationFrame(frameId)
			}
		}
	}, [])

	return (
		<>
			<Header />
			<main className='main container-lg' ref={mainRef}>
				<div className='pageProgressBar' aria-hidden='true'></div>
				<div className='mainParallaxBackground' aria-hidden='true'>
					<div className='mainParallaxLayer mainParallaxLayerSlow'></div>
					<div className='mainParallaxLayer mainParallaxLayerFast'></div>
				</div>
				<div className='mainContent'>
					<Suspense fallback={<Preloader />}>
						<Outlet />
					</Suspense>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Layout
