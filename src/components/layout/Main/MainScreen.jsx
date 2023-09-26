import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import './MainScreen.scss'
import '../../../assets/styles/media-queries.scss'
import { MainVideoBackground } from '../../screens/MainVideoBackground'

const MainScreen = () => {
	const { t, i18n } = useTranslation()
	useEffect(() => {
		const sloganFirst = document.querySelector('.mainScreenSloganFirst')
		const sloganSecond = document.querySelector('.mainScreenSloganSecond')
		const sloganThird = document.querySelector('.mainScreenSloganThird')
		const sloganFourth = document.querySelector('.mainScreenSloganFourth')
		setTimeout(() => {
			sloganFirst.style.opacity = '1'
			setTimeout(() => {
				sloganFirst.style.opacity = '0'
			}, 2200)
			setTimeout(() => {
				sloganSecond.style.opacity = '1'
				setTimeout(() => {
					sloganSecond.style.opacity = '0'
				}, 2200)
			}, 2200)
			setTimeout(() => {
				sloganThird.style.opacity = '1'
			}, 4200)
			setTimeout(() => {
				sloganFourth.style.opacity = '1'
			}, 6200)
		}, 800)
	}, [])
	return (
		<article className='row image-block'>
			<MainVideoBackground />
			<div className='col-12 mainTitle'>
				<h3 className='mainTitleSloganCompany'>
					{t('mainScreenSlogan.title')}
				</h3>
				<h1 className='mainTitleText'>Your Business Site</h1>
				<p className='mainScreenSloganFirst'>
					{t('mainScreenSloganFirst.title')}
				</p>
				<p className='mainScreenSloganSecond'>
					{t('mainScreenSloganSecond.title')}
				</p>
				<p className='mainScreenSloganThird'>
					{t('mainScreenSloganThird.title')}
				</p>
				<p className='mainScreenSloganFourth'>
					{t('mainScreenSloganFourth.title')}
				</p>
			</div>
		</article>
	)
}

export { MainScreen }
