import style from './VideoTop.scss'
import '../../assets/styles/media-queries.scss'
import videomp4 from '../../video/video-building-1.mp4'
import videowebm from '../../video/video-building-2.webm'

const VideoTop = () => {
	return (
		<div className='video-block-top'>
			<div className='bg-gradient-filter'></div>
			<video className='bg-video-top' autoPlay muted playsInline loop>
				<source src={videomp4} />
				<source src={videowebm} />
			</video>
		</div>
	)
}

export { VideoTop }
