import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useClickOutside } from '../../hooks/useClickOutside'
import './ZoomGalleryImage.scss'
import { IoCloseSharp } from 'react-icons/io5'

import { GalleryBackgroundFilter } from './GalleryBackgroundFilter'

const ZoomGalleryImage = props => {
	const { t, i18n } = useTranslation()
	const { src, isVisible, toggleVisible = Function.prototype } = props
	const zoomImage = useRef(null)
	useClickOutside(zoomImage, () => toggleVisible()) //Закрытие мобильного меню при клике вне его блока
	return (
		isVisible && (
			<>
				<article className='zoomImageWrap'>
					<GalleryBackgroundFilter />
					<div className='ZoomImageBlock'>
						<img className='zoomImage' src={src} ref={zoomImage} />
						<span className='zoomImageButton' onClick={toggleVisible}>
							<IoCloseSharp className='zoomImageButtonIcon' />
						</span>
					</div>
				</article>
			</>
		)
	)
}

export { ZoomGalleryImage }
