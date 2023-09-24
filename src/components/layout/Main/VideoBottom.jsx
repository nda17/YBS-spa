import './VideoBottom.scss';
import '../../../assets/styles/media-queries.scss'
import videomp4 from '../../../public/video/video-laptop-1.mp4';
import videowebm from '../../../public/video/video-laptop-2.webm';

const VideoBottom = () => {
	return (
		<div className='bg-video-form'>
			<div className='bg-gradient-filter-form'></div>
			<video className='bg-video-form' autoPlay muted playsInline loop>
				<source src={videomp4} />
				<source src={videowebm} />
			</video>
		</div>
	);
}

export { VideoBottom };
