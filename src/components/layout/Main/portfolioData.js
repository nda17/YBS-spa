const demoVideos = import.meta.glob('../../../../demo-mp4/*.mp4', {
	eager: true,
	query: '?url',
	import: 'default'
})

const demoPosters = import.meta.glob('../../../../demo-posters/*.webp', {
	eager: true,
	query: '?url',
	import: 'default'
})

const getDemoVideo = fileName => demoVideos[`../../../../demo-mp4/${fileName}`]
const getDemoPoster = fileName =>
	demoPosters[`../../../../demo-posters/${fileName.replace(/\.mp4$/, '.webp')}`]

const attachPortfolioMedia = ({ desktopVideoFile, mobileVideoFile, ...item }) => ({
	...item,
	desktopVideo: getDemoVideo(desktopVideoFile),
	mobileVideo: getDemoVideo(mobileVideoFile),
	desktopPoster: getDemoPoster(desktopVideoFile),
	mobilePoster: getDemoPoster(mobileVideoFile)
})

export const PORTFOLIO_VISIBLE_LIMIT = 6

export const PORTFOLIO_FILTERS = [
	{
		key: 'all',
		labelKey: 'landingPortfolioFilterAll.text'
	},
	{
		key: 'medical',
		labelKey: 'landingPortfolioFilterMedical.text'
	},
	{
		key: 'commerce',
		labelKey: 'landingPortfolioFilterCommerce.text'
	},
	{
		key: 'services',
		labelKey: 'landingPortfolioFilterServices.text'
	},
	{
		key: 'corporate',
		labelKey: 'landingPortfolioFilterCorporate.text'
	}
]

export const PORTFOLIO_ITEMS = [
	{
		title: 'Winwidget',
		url: 'https://winwidget.ru/',
		displayUrl: 'winwidget.ru',
		category: 'corporate',
		isFeatured: true,
		desktopVideoFile: 'winwidget-ru-desktop.mp4',
		mobileVideoFile: 'winwidget-ru-mobile.mp4'
	},
	{
		title: 'Life Clinic',
		url: 'https://lifeclinickhv.ru/',
		displayUrl: 'lifeclinickhv.ru',
		category: 'medical',
		desktopVideoFile: 'lifeclinickhv-ru-desktop.mp4',
		mobileVideoFile: 'lifeclinickhv-ru-mobile.mp4'
	},
	{
		title: 'H2O Spa',
		url: 'https://h2o-spa.ru/',
		displayUrl: 'h2o-spa.ru',
		category: 'services',
		desktopVideoFile: 'h2o-spa-ru-desktop.mp4',
		mobileVideoFile: 'h2o-spa-ru-mobile.mp4'
	},
	{
		title: 'MEDINC',
		url: 'https://medinc27.ru/',
		displayUrl: 'medinc27.ru',
		category: 'medical',
		desktopVideoFile: 'medinc27-ru-desktop.mp4',
		mobileVideoFile: 'medinc27-ru-mobile.mp4'
	},
	{
		title: 'ALLJP',
		url: 'https://alljp.ru/',
		displayUrl: 'alljp.ru',
		category: 'corporate',
		desktopVideoFile: 'alljp-ru-desktop.mp4',
		mobileVideoFile: 'alljp-ru-mobile.mp4'
	},
	{
		title: 'Дари Букет',
		url: 'https://daribuket27.ru/',
		displayUrl: 'daribuket27.ru',
		category: 'commerce',
		desktopVideoFile: 'daribuket27-ru-desktop.mp4',
		mobileVideoFile: 'daribuket27-ru-mobile.mp4'
	},
	{
		title: 'TRIVI',
		url: 'https://trivi.su/',
		displayUrl: 'trivi.su',
		category: 'corporate',
		desktopVideoFile: 'trivi-su-desktop.mp4',
		mobileVideoFile: 'trivi-su-mobile.mp4'
	},
	{
		title: 'Букет Фрукт',
		url: 'https://buketfrukt.ru/',
		displayUrl: 'buketfrukt.ru',
		category: 'commerce',
		desktopVideoFile: 'buketfrukt-ru-desktop.mp4',
		mobileVideoFile: 'buketfrukt-ru-mobile.mp4'
	},
	{
		title: 'Авиаимпульс',
		url: 'https://aviaimpuls.ru/',
		displayUrl: 'aviaimpuls.ru',
		category: 'services',
		desktopVideoFile: 'aviaimpuls-ru-desktop.mp4',
		mobileVideoFile: 'aviaimpuls-ru-mobile.mp4'
	},
	{
		title: 'ПроБетон27',
		url: 'https://probeton27.ru/',
		displayUrl: 'probeton27.ru',
		category: 'services',
		desktopVideoFile: 'probeton27-ru-desktop.mp4',
		mobileVideoFile: 'probeton27-ru-mobile.mp4'
	},
	{
		title: 'Созвездие Стом',
		url: 'https://sozvezdiestom.ru/',
		displayUrl: 'sozvezdiestom.ru',
		category: 'medical',
		desktopVideoFile: 'sozvezdiestom-ru-desktop.mp4',
		mobileVideoFile: 'sozvezdiestom-ru-mobile.mp4'
	},
	{
		title: 'Office Lab',
		url: 'https://officelab.art/',
		displayUrl: 'officelab.art',
		category: 'corporate',
		desktopVideoFile: 'officelab-art-desktop.mp4',
		mobileVideoFile: 'officelab-art-mobile.mp4'
	},
	{
		title: 'YBS Shop',
		url: 'https://shop.ybs.one/',
		displayUrl: 'shop.ybs.one',
		category: 'commerce',
		desktopVideoFile: 'shop-ybs-one-desktop.mp4',
		mobileVideoFile: 'shop-ybs-one-mobile.mp4'
	},
	{
		title: 'Art Nails',
		url: 'https://artnails.online/',
		displayUrl: 'artnails.online',
		category: 'services',
		desktopVideoFile: 'artnails-online-desktop.mp4',
		mobileVideoFile: 'artnails-online-mobile.mp4'
	},
	{
		title: 'H2O Spa',
		url: 'https://h2o-spa.ru/spa',
		displayUrl: 'h2o-spa.ru/spa',
		category: 'services',
		desktopVideoFile: 'h2o-spa-ru-spa-desktop.mp4',
		mobileVideoFile: 'h2o-spa-ru-spa-mobile.mp4'
	}
].map(attachPortfolioMedia)
