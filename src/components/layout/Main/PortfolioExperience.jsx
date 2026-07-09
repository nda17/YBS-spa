import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PortfolioModal from './PortfolioModal'
import PortfolioSection from './PortfolioSection'
import {
	PORTFOLIO_FILTERS,
	PORTFOLIO_ITEMS,
	PORTFOLIO_VISIBLE_LIMIT
} from './portfolioData'

const PortfolioExperience = () => {
	const { t } = useTranslation()
	const [isPortfolioExpanded, setIsPortfolioExpanded] = useState(false)
	const [activePortfolioFilter, setActivePortfolioFilter] = useState('all')
	const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(null)

	useEffect(() => {
		const revealItems = document.querySelectorAll(
			'.landingPortfolioSection .landingReveal'
		)
		if (!revealItems.length) {
			return
		}

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add('landingRevealVisible')
						observer.unobserve(entry.target)
					}
				})
			},
			{
				threshold: 0.14,
				rootMargin: '0px 0px -8% 0px'
			}
		)

		revealItems.forEach(item => observer.observe(item))

		return () => observer.disconnect()
	}, [activePortfolioFilter, isPortfolioExpanded])

	useEffect(() => {
		if (!selectedPortfolioItem) {
			return
		}

		const handleKeyDown = event => {
			if (event.key === 'Escape') {
				setSelectedPortfolioItem(null)
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [selectedPortfolioItem])

	const filteredPortfolioItems =
		activePortfolioFilter === 'all'
			? PORTFOLIO_ITEMS
			: PORTFOLIO_ITEMS.filter(item => item.category === activePortfolioFilter)
	const visiblePortfolioItems = isPortfolioExpanded
		? filteredPortfolioItems
		: filteredPortfolioItems.slice(0, PORTFOLIO_VISIBLE_LIMIT)
	const getPortfolioCategoryLabel = category => {
		const currentCategory = PORTFOLIO_FILTERS.find(
			filter => filter.key === category
		)

		return currentCategory ? t(currentCategory.labelKey) : ''
	}
	const handlePortfolioFilterChange = filterKey => {
		setActivePortfolioFilter(filterKey)
		setIsPortfolioExpanded(false)
	}

	return (
		<>
			<PortfolioSection
				activeFilter={activePortfolioFilter}
				filteredItems={filteredPortfolioItems}
				isExpanded={isPortfolioExpanded}
				onFilterChange={handlePortfolioFilterChange}
				onItemSelect={setSelectedPortfolioItem}
				onToggleExpanded={() =>
					setIsPortfolioExpanded(current => !current)
				}
				visibleItems={visiblePortfolioItems}
			/>
			<PortfolioModal
				item={selectedPortfolioItem}
				getCategoryLabel={getPortfolioCategoryLabel}
				onClose={() => setSelectedPortfolioItem(null)}
			/>
		</>
	)
}

export default PortfolioExperience
