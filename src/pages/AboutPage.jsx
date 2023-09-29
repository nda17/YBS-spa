import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { ButtonGoBack } from '../components/ui/buttons/ButtonGoBack'

const AboutPage = () => {
	const { t, i18n } = useTranslation()
	const [show, setShow] = useState(false)
	useEffect(() => {
		const textElement = document.querySelector('.title')
		setTimeout(() => {
			setShow(true)
			textElement.style.opacity = '1'
		}, 1000)
	}, [show])
	return (
		<>
			<h3 className='title'>PAGE UNDER DEVELOPMENT</h3>
			<ButtonGoBack />
		</>
	)
}

export { AboutPage }

//FIXME:useState, useEffect ПЕРЕМЕСТИТЬ В КОМПОНЕНТ
