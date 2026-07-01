import { useEffect, useRef, useState } from 'react'

const LazyPortfolioVideo = ({ src, poster, ...videoProps }) => {
	const videoRef = useRef(null)
	const [shouldLoad, setShouldLoad] = useState(false)

	useEffect(() => {
		const videoElement = videoRef.current
		if (!videoElement || !src) {
			return
		}

		if (!('IntersectionObserver' in window)) {
			setShouldLoad(true)
			return
		}

		const observer = new IntersectionObserver(
			entries => {
				const [entry] = entries
				if (entry.isIntersecting) {
					setShouldLoad(true)
					observer.disconnect()
				}
			},
			{
				rootMargin: '280px 0px',
				threshold: 0.01
			}
		)

		observer.observe(videoElement)

		return () => observer.disconnect()
	}, [src])

	return (
		<video
			{...videoProps}
			ref={videoRef}
			poster={poster}
			src={shouldLoad ? src : undefined}
			preload='none'
		/>
	)
}

export default LazyPortfolioVideo
