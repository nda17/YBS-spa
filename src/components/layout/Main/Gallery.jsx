import { useTranslation } from 'react-i18next'
import { useToggle } from '../../../hooks/useToggle'
import { useState, useEffect } from 'react'
import { ZoomGalleryImage } from '../../screens/ZoomGalleryImage'
import './Gallery.scss'
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
					<img
						onClick={() => zoomImage(outsoursingGif)}
						className='cardGalleryImage'
						src={outsoursing}
						alt='Layout image Outsourcing'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardBank.title')}</h3>
					<img
						onClick={() => zoomImage(bankGif)}
						className='cardGalleryImage'
						src={bank}
						alt='Layout image Banking services website'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardPortfolio.title')}
					</h3>
					<img
						onClick={() => zoomImage(portfolioGif)}
						className='cardGalleryImage'
						src={portfolio}
						alt='Layout image Portfolio'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardConcierge.title')}
					</h3>
					<img
						onClick={() => zoomImage(conciergeGif)}
						className='cardGalleryImage'
						src={concierge}
						alt='Layout image Service concierge'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardCosmetics.title')}
					</h3>
					<img
						onClick={() => zoomImage(cosmeticsGif)}
						className='cardGalleryImage'
						src={cosmetics}
						alt='Layout image Online cosmetics store'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardBrands.title')}</h3>
					<img
						onClick={() => zoomImage(brandsGif)}
						className='cardGalleryImage'
						src={brands}
						alt='Layout image Website for packaging branded items'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardClinique.title')}</h3>
					<img
						onClick={() => zoomImage(cliniqueGif)}
						className='cardGalleryImage'
						src={clinique}
						alt='Layout image Family Medicine Clinic'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardCafe.title')}</h3>
					<img
						onClick={() => zoomImage(cafeGif)}
						className='cardGalleryImage'
						src={cafe}
						alt='Layout image Cafe"'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardDesign.title')}</h3>
					<img
						onClick={() => zoomImage(designGif)}
						className='cardGalleryImage'
						src={design}
						alt='Layout image Website for arrangement of premises'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardFreelance.title')}
					</h3>
					<img
						onClick={() => zoomImage(freelanceGif)}
						className='cardGalleryImage'
						src={freelance}
						alt='Layout image Freelance platform'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardFurniture.title')}
					</h3>
					<img
						onClick={() => zoomImage(furnitureGif)}
						className='cardGalleryImage'
						src={furniture}
						alt='Layout image Online store of household goods'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardJewerly.title')}</h3>
					<img
						onClick={() => zoomImage(jewerlyGif)}
						className='cardGalleryImage'
						src={jewerly}
						alt='Layout image Jewelry store'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardMarketing.title')}
					</h3>
					<img
						onClick={() => zoomImage(marketingGif)}
						className='cardGalleryImage'
						src={marketing}
						alt='Layout image Marketing services'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardMedical.title')}</h3>
					<img
						onClick={() => zoomImage(medicalGif)}
						className='cardGalleryImage'
						src={medical}
						alt='Layout image Medical clinic website'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>
						{t('galleryCardMessenger.title')}
					</h3>
					<img
						onClick={() => zoomImage(messengerGif)}
						className='cardGalleryImage'
						src={messenger}
						alt='Layout image Corporate messenger website'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardMusic.title')}</h3>
					<img
						onClick={() => zoomImage(musicGif)}
						className='cardGalleryImage'
						src={music}
						alt='Layout image Music processing site'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardNeiro.title')}</h3>
					<img
						onClick={() => zoomImage(neiroGif)}
						className='cardGalleryImage'
						src={neiro}
						alt='Layout image Website of a neurotechnology development company'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardPage.title')}</h3>
					<img
						onClick={() => zoomImage(pageGif)}
						className='cardGalleryImage'
						src={page}
						alt='Layout image Device landing page'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardTracker.title')}</h3>
					<img
						onClick={() => zoomImage(trackerGif)}
						className='cardGalleryImage'
						src={tracker}
						alt='Layout image Fitness tracker app website'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardVideo.title')}</h3>
					<img
						onClick={() => zoomImage(videoGif)}
						className='cardGalleryImage'
						src={video}
						alt='Layout image Video platform website'
					/>
				</div>
				<div className='cardGallery col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6'>
					<h3 className='cardGalleryTitle'>{t('galleryCardVpn.title')}</h3>
					<img
						onClick={() => zoomImage(vpnGif)}
						className='cardGalleryImage'
						src={vpn}
						alt='Layout image VPN service website'
					/>
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
