import './FormVideoBackground.scss'
import '../../assets/styles/media-queries.scss'
import videomp4 from '../../public/video/video-laptop-1.mp4'
import videowebm from '../../public/video/video-laptop-2.webm'

const FormVideoBackground = () => {
	return (
		<div className='bgVideoForm'>
			<div className='bgGradientForm'></div>
			<video className='bgVideoForm' autoPlay muted playsInline loop>
				<source src={videomp4} />
				<source src={videowebm} />
			</video>
		</div>
	)
}

export { FormVideoBackground }
