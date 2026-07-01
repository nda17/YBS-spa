import '../../assets/styles/media-queries.scss'
import videomp4 from '../../public/video/video-building-1.mp4'
import videowebm from '../../public/video/video-building-2.webm'
import './MainVideoBackground.scss'

const MainVideoBackground = () => {
	return (
		<div>
			<div className='bgGradientFilter'></div>
			<video
				className='bgMainVideo'
				autoPlay
				muted
				playsInline
				loop
				preload='metadata'
				aria-hidden='true'
			>
				<source src={videowebm} type='video/webm' />
				<source src={videomp4} type='video/mp4' />
			</video>
		</div>
	)
}

export default MainVideoBackground
