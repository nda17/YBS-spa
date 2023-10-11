import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import MainVideoBackground from '../../screens/MainVideoBackground'
import './Home.scss'
import '../../../assets/styles/media-queries.scss'

const Home = () => {
	const { t, i18n } = useTranslation()
	const [showSlogan, setShowSlogan] = useState(false)
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
	useEffect(() => {
		const textElement = document.querySelector('.sloganAuthorText')
		setTimeout(() => {
			setShowSlogan(false)
			textElement.style.opacity = '1'
		}, 2100)
	}, [showSlogan])
	return (
		<>
			<article className='row homePageVideoBlock'>
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
			<article className='homePageSloganBlock'>
				<h2 className='sloganWrapper'>
					<p className='sloganText'>{t('sloganText.text')}</p>
					<p className='sloganAuthorText'>Henry Ford</p>
				</h2>
			</article>
		</>
	)
}

export default Home
