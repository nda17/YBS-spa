import { useTranslation } from 'react-i18next'
import LazyPortfolioVideo from './LazyPortfolioVideo'
import { PORTFOLIO_FILTERS, PORTFOLIO_VISIBLE_LIMIT } from './portfolioData'

const PortfolioSection = ({
	activeFilter,
	filteredItems,
	isExpanded,
	onFilterChange,
	onItemSelect,
	onToggleExpanded,
	visibleItems
}) => {
	const { t } = useTranslation()

	const getCategoryLabel = category => {
		const currentCategory = PORTFOLIO_FILTERS.find(
			filter => filter.key === category
		)

		return currentCategory ? t(currentCategory.labelKey) : ''
	}

	return (
		<section className='landingSection landingPortfolioSection'>
			<div className='landingSectionHeader landingReveal'>
				<h2 className='landingSectionTitle animatedTitleFlicker'>
					{t('landingPortfolioTitle.text')}
				</h2>
				<p className='landingSectionText'>{t('landingPortfolioText.text')}</p>
			</div>
			<div className='landingPortfolioFilters landingReveal'>
				{PORTFOLIO_FILTERS.map(filter => (
					<button
						className={`landingPortfolioFilter ${
							activeFilter === filter.key ? 'landingPortfolioFilterActive' : ''
						}`}
						key={filter.key}
						type='button'
						onClick={() => onFilterChange(filter.key)}
					>
						{t(filter.labelKey)}
					</button>
				))}
			</div>
			<div className='landingPortfolioGrid landingPortfolioVideoGrid'>
				{visibleItems.map((item, index) => (
					<article
						className='landingPortfolioItem landingReveal'
						key={item.displayUrl}
						style={{
							'--portfolioOrder': Math.max(index - PORTFOLIO_VISIBLE_LIMIT, 0),
							'--revealOrder': index
						}}
					>
						<div className='landingPortfolioVideoCard'>
							<div className='landingPortfolioVideoStage'>
								<div className='landingPortfolioDesktopFrame'>
									<span>{t('landingPortfolioDesktop.text')}</span>
									<LazyPortfolioVideo
										src={item.desktopVideo}
										poster={item.desktopPoster}
										autoPlay
										loop
										muted
										playsInline
										aria-label={`${item.title} ${t(
											'landingPortfolioDesktop.text'
										)}`}
									/>
								</div>
								<div className='landingPortfolioMobileFrame'>
									<span>{t('landingPortfolioMobile.text')}</span>
									<LazyPortfolioVideo
										src={item.mobileVideo}
										poster={item.mobilePoster}
										autoPlay
										loop
										muted
										playsInline
										aria-label={`${item.title} ${t(
											'landingPortfolioMobile.text'
										)}`}
									/>
								</div>
							</div>
							<div className='landingPortfolioContent'>
								<div className='landingPortfolioBadges'>
									{item.isFeatured && (
										<span className='landingPortfolioFeatured'>
											{t('landingPortfolioFeatured.text')}
										</span>
									)}
									<span className='landingPortfolioCategory'>
										{getCategoryLabel(item.category)}
									</span>
								</div>
								<h3>{item.title}</h3>
								<p>{item.displayUrl}</p>
								<div className='landingPortfolioActions'>
									<button
										className='landingPortfolioCaseButton'
										type='button'
										onClick={() => onItemSelect(item)}
									>
										{t('landingPortfolioCase.text')}
									</button>
									<a
										className='landingPortfolioOpenLink'
										href={item.url}
										target='_blank'
										rel='noreferrer'
										aria-label={`${t('landingPortfolioOpen.text')} ${
											item.title
										}`}
									>
										{t('landingPortfolioOpen.text')}
									</a>
								</div>
							</div>
						</div>
					</article>
				))}
			</div>
			{filteredItems.length > PORTFOLIO_VISIBLE_LIMIT && (
				<button
					className='landingPortfolioToggle'
					type='button'
					onClick={onToggleExpanded}
				>
					{isExpanded
						? t('landingPortfolioShowLess.text')
						: t('landingPortfolioShowMore.text')}
				</button>
			)}
		</section>
	)
}

export default PortfolioSection
