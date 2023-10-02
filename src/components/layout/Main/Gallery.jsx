import { useTranslation } from 'react-i18next'
import { useToggle } from '../../../hooks/useToggle'
import { useState, useEffect, useRef } from 'react'
import { GalleryBackgroundFilter } from '../../screens/GalleryBackgroundFilter'
import { ZoomGalleryImage } from '../../screens/ZoomGalleryImage'
import './Gallery.scss'

const Gallery = () => {
	const { t, i18n } = useTranslation()
	const [isVisible, toggleVisible] = useToggle(false)
	const [srcVideoFile, setSrcVideoFile] = useState(null)
	const [show, setShow] = useState(false)
	const zoomImage = props => {
		toggleVisible()
		const src = {
			outsourcing: '/src/public/gif/outsourcing.gif',
			bank: '/src/public/gif/bank.gif',
			portfolio: '/src/public/gif/portfolio.gif',
			concierge: '/src/public/gif/concierge.gif',
			cosmetics: '/src/public/gif/cosmetics .gif',
			brands: '/src/public/gif/brands.gif',
			clinique: '/src/public/gif/clinique.gif',
			cafe: '/src/public/gif/cafe.gif',
			design: '/src/public/gif/design.gif',
			freelance: '/src/public/gif/freelance.gif',
			furniture: '/src/public/gif/furniture.gif',
			jewerly: '/src/public/gif/jewerly.gif',
			marketing: '/src/public/gif/marketing.gif',
			medical: '/src/public/gif/medical.gif',
			messenger: '/src/public/gif/messenger.gif',
			music: '/src/public/gif/music.gif',
			neiro: '/src/public/gif/neiro.gif',
			page: '/src/public/gif/page.gif',
			tracker: '/src/public/gif/tracker.gif',
			video: '/src/public/gif/video.gif',
			vpn: '/src/public/gif/vpn.gif'
		}
		for (let key in src) {
			if (key === props) {
				setSrcVideoFile(src[key])
			}
		}
	}
	useEffect(() => {
		const textElement = document.querySelector('.title')
		setTimeout(() => {
			setShow(true)
			textElement.style.opacity = '1'
		}, 1000)
	}, [show])
	return (
		<>
			<h3 className='title'>{t('galleryTitle.title')}</h3>
			<article className='row cardGalleryWrap'>
				{/* {isVisible && <GalleryBackgroundFilter />} */}
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardOutsourcing.title')}
					</h3>
					<img
						onClick={() => zoomImage('outsourcing')}
						className='cardGalleryImage'
						src='/src/public/gif/outsoursing.jpg'
						alt='Layout image Outsourcing'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardBank.title')}</h3>
					<img
						onClick={() => zoomImage('bank')}
						className='cardGalleryImage'
						src='/src/public/gif/bank.jpg'
						alt='Layout image Banking services website'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardPortfolio.title')}
					</h3>
					<img
						onClick={() => zoomImage('portfolio')}
						className='cardGalleryImage'
						src='/src/public/gif/portfolio.jpg'
						alt='Layout image Portfolio'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardConcierge.title')}
					</h3>
					<img
						onClick={() => zoomImage('concierge')}
						className='cardGalleryImage'
						src='/src/public/gif/concierge.jpg'
						alt='Layout image Service concierge'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardCosmetics.title')}
					</h3>
					<img
						onClick={() => zoomImage('cosmetics')}
						className='cardGalleryImage'
						src='/src/public/gif/cosmetics.jpg'
						alt='Layout image Online cosmetics store'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardBrands.title')}</h3>
					<img
						onClick={() => zoomImage('brands')}
						className='cardGalleryImage'
						src='/src/public/gif/brands.jpg'
						alt='Layout image Website for packaging branded items'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardClinique.title')}</h3>
					<img
						onClick={() => zoomImage('clinique')}
						className='cardGalleryImage'
						src='/src/public/gif/clinique.jpg'
						alt='Layout image Family Medicine Clinic'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardCafe.title')}</h3>
					<img
						onClick={() => zoomImage('cafe')}
						className='cardGalleryImage'
						src='/src/public/gif/cafe.jpg'
						alt='Layout image Cafe"'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardDesign.title')}</h3>
					<img
						onClick={() => zoomImage('design')}
						className='cardGalleryImage'
						src='/src/public/gif/design.jpg'
						alt='Layout image Website for arrangement of premises'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardFreelance.title')}
					</h3>
					<img
						onClick={() => zoomImage('freelance')}
						className='cardGalleryImage'
						src='/src/public/gif/freelance.jpg'
						alt='Layout image Freelance platform'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardFurniture.title')}
					</h3>
					<img
						onClick={() => zoomImage('furniture')}
						className='cardGalleryImage'
						src='/src/public/gif/furniture.jpg'
						alt='Layout image Online store of household goods'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardJewerly.title')}</h3>
					<img
						onClick={() => zoomImage('jewerly')}
						className='cardGalleryImage'
						src='/src/public/gif/jewerly.jpg'
						alt='Layout image Jewelry store'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardMarketing.title')}
					</h3>
					<img
						onClick={() => zoomImage('marketing')}
						className='cardGalleryImage'
						src='/src/public/gif/marketing.jpg'
						alt='Layout image Marketing services'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardMedical.title')}</h3>
					<img
						onClick={() => zoomImage('medical')}
						className='cardGalleryImage'
						src='/src/public/gif/medical.jpg'
						alt='Layout image Medical clinic website'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardMessenger.title')}
					</h3>
					<img
						onClick={() => zoomImage('messenger')}
						className='cardGalleryImage'
						src='/src/public/gif/messenger.jpg'
						alt='Layout image Corporate messenger website'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardMusic.title')}
					</h3>
					<img
						onClick={() => zoomImage('music')}
						className='cardGalleryImage'
						src='/src/public/gif/music.jpg'
						alt='Layout image Music processing site'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardNeiro.title')}
					</h3>
					<img
						onClick={() => zoomImage('neiro')}
						className='cardGalleryImage'
						src='/src/public/gif/neiro.jpg'
						alt='Layout image Website of a neurotechnology development company'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardPage.title')}
					</h3>
					<img
						onClick={() => zoomImage('page')}
						className='cardGalleryImage'
						src='/src/public/gif/page.jpg'
						alt='Layout image Device landing page'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardTracker.title')}
					</h3>
					<img
						onClick={() => zoomImage('tracker')}
						className='cardGalleryImage'
						src='/src/public/gif/tracker.jpg'
						alt='Layout image Fitness tracker app website'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardVideo.title')}
					</h3>
					<img
						onClick={() => zoomImage('video')}
						className='cardGalleryImage'
						src='/src/public/gif/video.jpg'
						alt='Layout image Video platform website'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardVpn.title')}
					</h3>
					<img
						onClick={() => zoomImage('vpn')}
						className='cardGalleryImage'
						src='/src/public/gif/vpn.jpg'
						alt='Layout image VPN service website'
					/>
				</div>
				<ZoomGalleryImage
					src={srcVideoFile}
					isVisible={isVisible}
					toggleVisible={toggleVisible}
				/>
			</article>
		</>
	)
}

export { Gallery }
