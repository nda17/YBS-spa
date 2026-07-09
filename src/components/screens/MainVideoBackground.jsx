import { useEffect, useState } from 'react'
import '../../assets/styles/media-queries.scss'
import videomp4 from '../../public/video/video-laptop-1.mp4'
import videowebm from '../../public/video/video-laptop-2.webm'
import mobileVideomp4 from '../../public/video/video-laptop-mobile-short.mp4'
import mobileVideowebm from '../../public/video/video-laptop-mobile-short.webm'
import './MainVideoBackground.scss'

const mobileVideoQuery = '(max-width: 767px)'
const posterDesktop = '/hero-video-poster-desktop.jpg'
const posterMobile = '/hero-video-poster-mobile.jpg'

const MainVideoBackground = () => {
	const [shouldMountVideo, setShouldMountVideo] = useState(false)
	const [isVideoReady, setIsVideoReady] = useState(false)
	const [isMobileVideo, setIsMobileVideo] = useState(() => {
		if (typeof window === 'undefined' || !window.matchMedia) {
			return false
		}

		return window.matchMedia(mobileVideoQuery).matches
	})

	useEffect(() => {
		if (typeof window === 'undefined' || !window.matchMedia) {
			return
		}

		const mediaQuery = window.matchMedia(mobileVideoQuery)
		const handleQueryChange = event => setIsMobileVideo(event.matches)

		setIsMobileVideo(mediaQuery.matches)

		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener('change', handleQueryChange)
			return () => mediaQuery.removeEventListener('change', handleQueryChange)
		}

		mediaQuery.addListener(handleQueryChange)
		return () => mediaQuery.removeListener(handleQueryChange)
	}, [])

	useEffect(() => {
		if (typeof window === 'undefined' || shouldMountVideo) {
			return
		}

		const mountVideo = () => setShouldMountVideo(true)
		const events = ['pointerdown', 'keydown', 'touchstart', 'wheel', 'scroll']

		events.forEach(eventName => {
			window.addEventListener(eventName, mountVideo, {
				once: true,
				passive: true
			})
		})

		return () => {
			events.forEach(eventName => {
				window.removeEventListener(eventName, mountVideo)
			})
		}
	}, [shouldMountVideo])

	const currentMp4 = isMobileVideo ? mobileVideomp4 : videomp4
	const currentWebm = isMobileVideo ? mobileVideowebm : videowebm
	const currentPoster = isMobileVideo ? posterMobile : posterDesktop

	return (
		<div>
			<picture className='bgMainPosterWrap' aria-hidden='true'>
				<source media={mobileVideoQuery} srcSet={posterMobile} />
				<img
					className='bgMainPoster'
					src={posterDesktop}
					alt=''
					width='1280'
					height='720'
					decoding='async'
				/>
			</picture>
			<div className='bgGradientFilter'></div>
			{shouldMountVideo && (
				<video
					key={isMobileVideo ? 'mobileHeroVideo' : 'desktopHeroVideo'}
					className={`bgMainVideo ${isVideoReady ? 'bgMainVideoVisible' : ''}`}
					autoPlay
					muted
					playsInline
					loop
					preload='none'
					poster={currentPoster}
					aria-hidden='true'
					onCanPlay={() => setIsVideoReady(true)}
				>
					<source src={currentWebm} type='video/webm' />
					<source src={currentMp4} type='video/mp4' />
				</video>
			)}
		</div>
	)
}

export default MainVideoBackground
