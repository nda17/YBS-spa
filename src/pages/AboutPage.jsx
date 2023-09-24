import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const AboutPage = () => {
	const [show, setShow] = useState(false)
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	useEffect(() => {
		const textElement = document.querySelector('.title')
		setTimeout(() => {
			setShow(true)
			textElement.style.opacity = '1'
		}, 1000)
	}, [show])
	return (
		<div className='page'>
			<button className='btnGoBack' onClick={goBack}>
				Назад
			</button>
			<h3 className='title'>СТРАНИЦА В РАЗРАБОТКЕ</h3>
		</div>
	)
}

export { AboutPage }

//////////////////////useState, useEffect ПЕРЕМЕСТИТЬ В КОМПОНЕНТ
