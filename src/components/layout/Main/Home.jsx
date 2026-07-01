import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'
import MainVideoBackground from '../../screens/MainVideoBackground'
import CardServices from './CardServices'
import FormMain from './FormMain'
import Contacts from './Contacts'
import PortfolioModal from './PortfolioModal'
import PortfolioSection from './PortfolioSection'
import {
	BENTO_ITEMS,
	FAQ_ITEMS,
	INTRO_ITEMS,
	PORTFOLIO_FILTERS,
	PORTFOLIO_ITEMS,
	PORTFOLIO_VISIBLE_LIMIT,
	PROCESS_ITEMS,
	TEAM_STAT_TARGETS,
	translateFaqItems,
	translateLandingItems
} from './homeData'
import './Home.scss'
import '../../../assets/styles/media-queries.scss'

const Home = () => {
	const { t } = useTranslation()
	const [isPortfolioExpanded, setIsPortfolioExpanded] = useState(false)
	const [activePortfolioFilter, setActivePortfolioFilter] = useState('all')
	const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(null)
	const [openFaqIndex, setOpenFaqIndex] = useState(0)
	const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0])
	const sloganFirstRef = useRef(null)
	const sloganSecondRef = useRef(null)
	const sloganThirdRef = useRef(null)
	const sloganFourthRef = useRef(null)
	const sloganAuthorRef = useRef(null)
	const parallaxRef = useRef(null)
	const statsRef = useRef(null)

	useEffect(() => {
		const timers = []
		const addTimer = (callback, delay) => {
			timers.push(setTimeout(callback, delay))
		}

		addTimer(() => {
			if (sloganFirstRef.current) {
				sloganFirstRef.current.style.opacity = '1'
			}
			addTimer(() => {
				if (sloganFirstRef.current) {
					sloganFirstRef.current.style.opacity = '0'
				}
			}, 4000)
			addTimer(() => {
				if (sloganSecondRef.current) {
					sloganSecondRef.current.style.opacity = '1'
				}
				addTimer(() => {
					if (sloganSecondRef.current) {
						sloganSecondRef.current.style.opacity = '0'
					}
				}, 4000)
			}, 4000)
			addTimer(() => {
				if (sloganThirdRef.current) {
					sloganThirdRef.current.style.opacity = '1'
				}
			}, 8000)
			addTimer(() => {
				if (sloganFourthRef.current) {
					sloganFourthRef.current.style.opacity = '1'
				}
			}, 10000)
		}, 800)

		addTimer(() => {
			if (sloganAuthorRef.current) {
				sloganAuthorRef.current.style.opacity = '1'
			}
		}, 2100)

		return () => timers.forEach(timerId => clearTimeout(timerId))
	}, [])

	useEffect(() => {
		const parallaxElement = parallaxRef.current
		if (!parallaxElement) {
			return
		}
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			return
		}

		let frameId = null
		const updateParallax = () => {
			const rect = parallaxElement.getBoundingClientRect()
			parallaxElement.style.setProperty(
				'--parallaxOffset',
				`${Math.round(rect.top * -0.16)}px`
			)
			frameId = null
		}
		const requestUpdate = () => {
			if (frameId === null) {
				frameId = requestAnimationFrame(updateParallax)
			}
		}

		updateParallax()
		window.addEventListener('scroll', requestUpdate, { passive: true })
		window.addEventListener('resize', requestUpdate)

		return () => {
			window.removeEventListener('scroll', requestUpdate)
			window.removeEventListener('resize', requestUpdate)
			if (frameId !== null) {
				cancelAnimationFrame(frameId)
			}
		}
	}, [])

	useEffect(() => {
		const revealItems = document.querySelectorAll('.landingReveal')
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
		const statsElement = statsRef.current
		if (!statsElement) {
			return
		}
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			setAnimatedStats(TEAM_STAT_TARGETS)
			return
		}

		let frameId = null
		let isStarted = false
		const observer = new IntersectionObserver(
			entries => {
				const [entry] = entries
				if (!entry.isIntersecting || isStarted) {
					return
				}

				isStarted = true
				const startedAt = performance.now()
				const duration = 900
				const animateStats = currentTime => {
					const progress = Math.min((currentTime - startedAt) / duration, 1)
					const easedProgress = 1 - Math.pow(1 - progress, 3)

					setAnimatedStats(
						TEAM_STAT_TARGETS.map(value => Math.round(value * easedProgress))
					)

					if (progress < 1) {
						frameId = requestAnimationFrame(animateStats)
					}
				}

				frameId = requestAnimationFrame(animateStats)
				observer.disconnect()
			},
			{
				threshold: 0.35
			}
		)

		observer.observe(statsElement)

		return () => {
			observer.disconnect()
			if (frameId !== null) {
				cancelAnimationFrame(frameId)
			}
		}
	}, [])

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

	const introItems = translateLandingItems(INTRO_ITEMS, t)
	const bentoItems = translateLandingItems(BENTO_ITEMS, t)
	const processItems = translateLandingItems(PROCESS_ITEMS, t)
	const statItems = [
		{
			value: animatedStats[0],
			suffix: '',
			label: t('landingStatsTeamLabel.text')
		},
		{
			value: animatedStats[1],
			suffix: '',
			label: t('landingStatsDirectionsLabel.text')
		},
		{
			value: animatedStats[2],
			suffix: '+',
			label: t('landingStatsRolesLabel.text')
		},
		{
			value: animatedStats[3],
			suffix: '',
			label: t('landingStatsSprintLabel.text')
		}
	]
	const faqItems = translateFaqItems(FAQ_ITEMS, t)
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
	const scrollToSection = sectionId => {
		const targetSection = document.getElementById(sectionId)
		if (targetSection) {
			targetSection.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}
	}

	return (
		<>
			<article className='row homePageVideoBlock' id='home'>
				<MainVideoBackground />
				<div className='col-12 mainTitle'>
					<h3
						className='mainTitleSloganCompany'
						data-text={t('mainScreenSlogan.title')}
					>
						{t('mainScreenSlogan.title')}
					</h3>
					<h1 className='mainTitleText' data-text='Your Business Site'>
						Your Business Site
					</h1>
					<p className='mainScreenSloganFirst' ref={sloganFirstRef}>
						{t('mainScreenSloganFirst.title')}
					</p>
					<p className='mainScreenSloganSecond' ref={sloganSecondRef}>
						{t('mainScreenSloganSecond.title')}
					</p>
					<p className='mainScreenSloganThird' ref={sloganThirdRef}>
						{t('mainScreenSloganThird.title')}
					</p>
					<p className='mainScreenSloganFourth' ref={sloganFourthRef}>
						{t('mainScreenSloganFourth.title')}
					</p>
				</div>
			</article>
			<article className='homePageSloganBlock'>
				<h2 className='sloganWrapper'>
					<p className='sloganText'>{t('sloganText.text')}</p>
					<p className='sloganAuthorText' ref={sloganAuthorRef}>
						Henry Ford
					</p>
				</h2>
			</article>
			<section className='landingSection landingIntroSection'>
				<div className='landingSectionHeader landingReveal'>
					<h2 className='landingSectionTitle animatedTitleFlicker'>
						{t('landingIntroTitle.text')}
					</h2>
					<p className='landingSectionText'>{t('landingIntroText.text')}</p>
				</div>
				<div className='landingIntroGrid'>
					{introItems.map((item, index) => (
						<article
							className='landingIntroItem landingReveal'
							key={item.title}
							style={{ '--revealOrder': index }}
						>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</article>
					))}
				</div>
			</section>
			<section className='landingSection landingBentoSection'>
				<div className='landingSectionHeader landingReveal'>
					<h2 className='landingSectionTitle animatedTitleFlicker'>
						{t('landingBentoTitle.text')}
					</h2>
					<p className='landingSectionText'>{t('landingBentoText.text')}</p>
				</div>
				<div className='landingBentoGrid'>
					{bentoItems.map((item, index) => (
						<article
							className={`landingBentoItem landingReveal ${
								index === 0 ? 'landingBentoItemLarge' : ''
							} ${
								index === bentoItems.length - 1 ? 'landingBentoItemFinal' : ''
							}`}
							key={item.title}
							style={{ '--revealOrder': index }}
						>
							<span>{String(index + 1).padStart(2, '0')}</span>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</article>
					))}
				</div>
			</section>
			<section
				className='landingSection landingServicesSection landingReveal'
				id='services'
			>
				<CardServices />
			</section>
			<section className='landingSection landingProcessSection'>
				<div className='landingSectionHeader landingReveal'>
					<h2 className='landingSectionTitle animatedTitleFlicker'>
						{t('landingProcessTitle.text')}
					</h2>
					<p className='landingSectionText'>{t('landingProcessText.text')}</p>
				</div>
				<div className='landingProcessGrid'>
					{processItems.map((item, index) => (
						<article
							className='landingProcessItem landingReveal'
							key={item.title}
							style={{ '--revealOrder': index }}
						>
							<span>{String(index + 1).padStart(2, '0')}</span>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
						</article>
					))}
				</div>
			</section>
			<section
				className='landingSection landingStatsSection'
				ref={statsRef}
				aria-label={t('landingStatsTitle.text')}
			>
				<div className='landingSectionHeader landingReveal'>
					<h2 className='landingSectionTitle animatedTitleFlicker'>
						{t('landingStatsTitle.text')}
					</h2>
					<p className='landingSectionText'>{t('landingStatsText.text')}</p>
				</div>
				<div className='landingStatsGrid'>
					{statItems.map((item, index) => (
						<article
							className='landingStatItem landingReveal'
							key={item.label}
							style={{ '--revealOrder': index }}
						>
							<strong>
								{item.value}
								{item.suffix}
							</strong>
							<span>{item.label}</span>
						</article>
					))}
				</div>
			</section>
			<section
				className='landingParallaxSection'
				ref={parallaxRef}
				style={{ '--parallaxOffset': '0px' }}
			>
				<div className='landingParallaxLayer'></div>
				<div className='landingParallaxContent'>
					<h2 className='animatedTitleFlicker'>
						{t('landingParallaxTitle.text')}
					</h2>
					<p>{t('landingParallaxText.text')}</p>
				</div>
			</section>
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
			<section className='landingSection landingCtaSection'>
				<div className='landingCtaBlock landingReveal'>
					<div>
						<h2 className='animatedTitleFlicker'>
							{t('landingCtaTitle.text')}
						</h2>
						<p>{t('landingCtaText.text')}</p>
					</div>
					<div className='landingCtaActions'>
						<button type='button' onClick={() => scrollToSection('calculate')}>
							{t('landingCtaCalculate.text')}
						</button>
						<button type='button' onClick={() => scrollToSection('contacts')}>
							{t('landingCtaContacts.text')}
						</button>
					</div>
				</div>
			</section>
			<section className='landingSection landingCalculateSection' id='calculate'>
				<FormMain />
			</section>
			<section className='landingSection landingFaqSection'>
				<div className='landingSectionHeader landingReveal'>
					<h2 className='landingSectionTitle animatedTitleFlicker'>
						{t('landingFaqTitle.text')}
					</h2>
					<p className='landingSectionText'>{t('landingFaqText.text')}</p>
				</div>
				<div className='landingFaqList'>
					{faqItems.map((item, index) => (
						<article
							className={`landingFaqItem ${
								openFaqIndex === index ? 'landingFaqItemActive' : ''
							}`}
							key={item.question}
						>
							<button
								className='landingFaqQuestion'
								type='button'
								aria-expanded={openFaqIndex === index}
								onClick={() =>
									setOpenFaqIndex(current => (current === index ? -1 : index))
								}
							>
								<span>{item.question}</span>
								<span className='landingFaqIcon'>
									{openFaqIndex === index ? '-' : '+'}
								</span>
							</button>
							<div className='landingFaqAnswer'>
								<p>{item.answer}</p>
							</div>
						</article>
					))}
				</div>
			</section>
			<section className='landingSection landingContactsSection' id='contacts'>
				<Contacts />
			</section>
			<PortfolioModal
				item={selectedPortfolioItem}
				getCategoryLabel={getPortfolioCategoryLabel}
				onClose={() => setSelectedPortfolioItem(null)}
			/>
		</>
	)
}

export default Home
