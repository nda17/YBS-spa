import { useTranslation } from 'react-i18next'

const PortfolioModal = ({ item, getCategoryLabel, onClose }) => {
	const { t } = useTranslation()
	const handleVideoLoadedMetadata = event => {
		event.currentTarget.playbackRate = 0.65
	}

	if (!item) {
		return null
	}

	return (
		<div className='portfolioModalOverlay' role='presentation' onClick={onClose}>
			<article
				className='portfolioModal'
				role='dialog'
				aria-modal='true'
				aria-label={item.title}
				onClick={event => event.stopPropagation()}
			>
				<button
					className='portfolioModalClose'
					type='button'
					aria-label={t('landingPortfolioClose.text')}
					onClick={onClose}
				>
					X
				</button>
				<div className='portfolioModalHeader'>
					<div className='portfolioModalBadges'>
						{item.isFeatured && (
							<span className='landingPortfolioFeatured'>
								{t('landingPortfolioFeatured.text')}
							</span>
						)}
						<span>{getCategoryLabel(item.category)}</span>
					</div>
					<h2>{item.title}</h2>
					<p>{item.displayUrl}</p>
				</div>
				<div className='portfolioModalPreviewGrid'>
					<div className='portfolioModalDesktopFrame'>
						<span>{t('landingPortfolioDesktop.text')}</span>
						<video
							src={item.desktopVideo}
							poster={item.desktopPoster}
							autoPlay
							loop
							muted
							playsInline
							preload='metadata'
							onLoadedMetadata={handleVideoLoadedMetadata}
						/>
					</div>
					<div className='portfolioModalMobileFrame'>
						<span>{t('landingPortfolioMobile.text')}</span>
						<video
							src={item.mobileVideo}
							poster={item.mobilePoster}
							autoPlay
							loop
							muted
							playsInline
							preload='metadata'
							onLoadedMetadata={handleVideoLoadedMetadata}
						/>
					</div>
				</div>
				<a
					className='portfolioModalLink'
					href={item.url}
					target='_blank'
					rel='noreferrer'
				>
					{t('landingPortfolioOpen.text')}
				</a>
			</article>
		</div>
	)
}

export default PortfolioModal
