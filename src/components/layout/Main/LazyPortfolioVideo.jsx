import { useEffect, useRef, useState } from 'react'

const LazyPortfolioVideo = ({
	src,
	poster,
	playbackRate = 0.18,
	...videoProps
}) => {
	const videoRef = useRef(null)
	const [shouldLoad, setShouldLoad] = useState(false)
	const [shouldPlay, setShouldPlay] = useState(false)

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = playbackRate
		}
	}, [playbackRate, shouldLoad])

	useEffect(() => {
		const videoElement = videoRef.current
		if (!videoElement || !shouldLoad) {
			return
		}

		if (shouldPlay) {
			videoElement.play().catch(() => {})
			return
		}

		videoElement.pause()
	}, [shouldLoad, shouldPlay])

	useEffect(() => {
		const videoElement = videoRef.current
		if (!videoElement || !src) {
			return
		}

		if (!('IntersectionObserver' in window)) {
			setShouldLoad(true)
			setShouldPlay(true)
			return
		}

		const observer = new IntersectionObserver(
			entries => {
				const [entry] = entries
				if (entry.isIntersecting) {
					setShouldLoad(true)
				}
				setShouldPlay(entry.isIntersecting)
			},
			{
				rootMargin: '0px',
				threshold: 0
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
