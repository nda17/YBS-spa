import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useClickOutside } from '../../hooks/useClickOutside'
import { IoCloseSharp } from 'react-icons/io5'
import GalleryBackgroundFilter from './GalleryBackgroundFilter'
import './ZoomGalleryImage.scss'
import '../../assets/styles/media-queries.scss'

const ZoomGalleryImage = props => {
	const { t, i18n } = useTranslation()
	const { srcGif, isVisible, toggleVisible = Function.prototype } = props
	const zoomImage = useRef(null)
	useClickOutside(zoomImage, () => toggleVisible()) //Закрытие модального окна при клике вне его блока

	return (
		isVisible && (
			<>
				<article className='zoomImageWrap'>
					<GalleryBackgroundFilter />
					<div className='ZoomImageBlock'>
						<img className='zoomImage' src={srcGif} ref={zoomImage} />
						<span className='zoomImageFilter'></span>
						<span className='zoomImageButton' onClick={toggleVisible}>
							<IoCloseSharp className='zoomImageButtonIcon' />
						</span>
					</div>
				</article>
			</>
		)
	)
}

export default ZoomGalleryImage
