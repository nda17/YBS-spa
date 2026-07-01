import { useEffect, useRef, useState } from 'react'
import './FormVideoBackground.scss'
import '../../assets/styles/media-queries.scss'
import videomp4 from '../../public/video/video-laptop-1.mp4'
import videowebm from '../../public/video/video-laptop-2.webm'

const FormVideoBackground = () => {
	const videoRef = useRef(null)
	const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

	useEffect(() => {
		const videoElement = videoRef.current
		if (!videoElement) {
			return
		}

		if (!('IntersectionObserver' in window)) {
			setShouldLoadVideo(true)
			return
		}

		const observer = new IntersectionObserver(
			entries => {
				const [entry] = entries
				if (entry.isIntersecting) {
					setShouldLoadVideo(true)
					observer.disconnect()
				}
			},
			{
				rootMargin: '240px 0px',
				threshold: 0.01
			}
		)

		observer.observe(videoElement)

		return () => observer.disconnect()
	}, [])

	return (
		<div className='bgVideoForm'>
			<div className='bgGradientForm'></div>
			<video
				className='bgVideoForm'
				ref={videoRef}
				autoPlay
				muted
				playsInline
				loop
				preload='none'
				aria-hidden='true'
			>
				{shouldLoadVideo && (
					<>
						<source src={videowebm} type='video/webm' />
						<source src={videomp4} type='video/mp4' />
					</>
				)}
			</video>
		</div>
	)
}

export default FormVideoBackground
