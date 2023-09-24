import './MainVideoBackground.scss'
import '../../assets/styles/media-queries.scss'
import videomp4 from '../../public/video/video-building-1.mp4'
import videowebm from '../../public/video/video-building-2.webm'

const MainVideoBackground = () => {
	return (
		<div>
			<div className='bgGradientFilter'></div>
			<video className='bgMainVideo' autoPlay muted playsInline loop>
				<source src={videomp4} />
				<source src={videowebm} />
			</video>
		</div>
	)
}

export { MainVideoBackground }