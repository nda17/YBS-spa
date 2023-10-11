import { useTranslation } from 'react-i18next'
import { useToggle } from '../../../hooks/useToggle'
import { useState, useEffect } from 'react'
import ZoomGalleryImage from '../../screens/ZoomGalleryImage'
import outsoursing from '../../../public/gif/outsoursing.jpg'
import bank from '../../../public/gif/bank.jpg'
import portfolio from '../../../public/gif/portfolio.jpg'
import concierge from '../../../public/gif/concierge.jpg'
import cosmetics from '../../../public/gif/cosmetics.jpg'
import brands from '../../../public/gif/brands.jpg'
import clinique from '../../../public/gif/clinique.jpg'
import cafe from '../../../public/gif/cafe.jpg'
import design from '../../../public/gif/design.jpg'
import freelance from '../../../public/gif/freelance.jpg'
import furniture from '../../../public/gif/furniture.jpg'
import jewerly from '../../../public/gif/jewerly.jpg'
import marketing from '../../../public/gif/marketing.jpg'
import medical from '../../../public/gif/medical.jpg'
import messenger from '../../../public/gif/messenger.jpg'
import music from '../../../public/gif/music.jpg'
import neiro from '../../../public/gif/neiro.jpg'
import page from '../../../public/gif/page.jpg'
import tracker from '../../../public/gif/tracker.jpg'
import video from '../../../public/gif/video.jpg'
import vpn from '../../../public/gif/vpn.jpg'
import outsoursingGif from '../../../public/gif/outsoursing.gif'
import bankGif from '../../../public/gif/bank.gif'
import portfolioGif from '../../../public/gif/portfolio.gif'
import conciergeGif from '../../../public/gif/concierge.gif'
import cosmeticsGif from '../../../public/gif/cosmetics.gif'
import brandsGif from '../../../public/gif/brands.gif'
import cliniqueGif from '../../../public/gif/clinique.gif'
import cafeGif from '../../../public/gif/cafe.gif'
import designGif from '../../../public/gif/design.gif'
import freelanceGif from '../../../public/gif/freelance.gif'
import furnitureGif from '../../../public/gif/furniture.gif'
import jewerlyGif from '../../../public/gif/jewerly.gif'
import marketingGif from '../../../public/gif/marketing.gif'
import medicalGif from '../../../public/gif/medical.gif'
import messengerGif from '../../../public/gif/messenger.gif'
import musicGif from '../../../public/gif/music.gif'
import neiroGif from '../../../public/gif/neiro.gif'
import pageGif from '../../../public/gif/page.gif'
import trackerGif from '../../../public/gif/tracker.gif'
import videoGif from '../../../public/gif/video.gif'
import vpnGif from '../../../public/gif/vpn.gif'
import './Gallery.scss'
import '../../../assets/styles/media-queries.scss'

const Gallery = () => {
	const { t, i18n } = useTranslation()
	const [isVisible, toggleVisible] = useToggle(false)
	const [srcGif, setSrcGif] = useState(null)
	const [show, setShow] = useState(false)
	const zoomImage = props => {
		toggleVisible()
		setSrcGif(props)
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
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardOutsourcing.title')}
					</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(outsoursingGif)}
					>
						<img
							className='cardGalleryImage'
							src={outsoursing}
							alt='Layout image Outsourcing'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardBank.title')}</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(bankGif)}
					>
						<img
							className='cardGalleryImage'
							src={bank}
							alt='Layout image Banking services website'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardPortfolio.title')}
					</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(portfolioGif)}
					>
						<img
							className='cardGalleryImage'
							src={portfolio}
							alt='Layout image Portfolio'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardConcierge.title')}
					</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(conciergeGif)}
					>
						<img
							className='cardGalleryImage'
							src={concierge}
							alt='Layout image Service concierge'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardCosmetics.title')}
					</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(cosmeticsGif)}
					>
						<img
							className='cardGalleryImage'
							src={cosmetics}
							alt='Layout image Online cosmetics store'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardBrands.title')}</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(brandsGif)}
					>
						<img
							className='cardGalleryImage'
							src={brands}
							alt='Layout image Website for packaging branded items'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardClinique.title')}</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(cliniqueGif)}
					>
						<img
							className='cardGalleryImage'
							src={clinique}
							alt='Layout image Family Medicine Clinic'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardCafe.title')}</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(cafeGif)}
					>
						<img
							className='cardGalleryImage'
							src={cafe}
							alt='Layout image Cafe"'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardDesign.title')}</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(designGif)}
					>
						<img
							className='cardGalleryImage'
							src={design}
							alt='Layout image Website for arrangement of premises'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardFreelance.title')}
					</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(freelanceGif)}
					>
						<img
							className='cardGalleryImage'
							src={freelance}
							alt='Layout image Freelance platform'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardFurniture.title')}
					</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(furnitureGif)}
					>
						<img
							className='cardGalleryImage'
							src={furniture}
							alt='Layout image Online store of household goods'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardJewerly.title')}</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(jewerlyGif)}
					>
						<img
							className='cardGalleryImage'
							src={jewerly}
							alt='Layout image Jewelry store'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardMarketing.title')}
					</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(marketingGif)}
					>
						<img
							className='cardGalleryImage'
							src={marketing}
							alt='Layout image Marketing services'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardMedical.title')}</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(medicalGif)}
					>
						<img
							className='cardGalleryImage'
							src={medical}
							alt='Layout image Medical clinic website'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardMessenger.title')}
					</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(messengerGif)}
					>
						<img
							className='cardGalleryImage'
							src={messenger}
							alt='Layout image Corporate messenger website'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardMusic.title')}</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(musicGif)}
					>
						<img
							className='cardGalleryImage'
							src={music}
							alt='Layout image Music processing site'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardNeiro.title')}</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(neiroGif)}
					>
						<img
							className='cardGalleryImage'
							src={neiro}
							alt='Layout image Website of a neurotechnology development company'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardPage.title')}</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(pageGif)}
					>
						<img
							className='cardGalleryImage'
							src={page}
							alt='Layout image Device landing page'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardTracker.title')}</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(trackerGif)}
					>
						<img
							className='cardGalleryImage'
							src={tracker}
							alt='Layout image Fitness tracker app website'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardVideo.title')}</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(videoGif)}
					>
						<img
							className='cardGalleryImage'
							src={video}
							alt='Layout image Video platform website'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardVpn.title')}</h3>
					<div
						className='cardGalleryWrapImage'
						onClick={() => zoomImage(vpnGif)}
					>
						<img
							className='cardGalleryImage'
							src={vpn}
							alt='Layout image VPN service website'
						/>
						<span className='cardGalleryImageFilter'></span>
					</div>
				</div>
				<ZoomGalleryImage
					srcGif={srcGif}
					isVisible={isVisible}
					toggleVisible={toggleVisible}
				/>
			</article>
		</>
	)
}

export default Gallery
