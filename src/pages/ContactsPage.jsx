import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ContactsPage = () => {
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
			<h3 className='title'>СТРАНИЦА В РАЗРАБОТКЕ</h3>
			<button className='btnGoBack' onClick={goBack}>
				Назад
			</button>
		</div>
	)
}

export { ContactsPage }

//////////////////////useState, useEffect ПЕРЕМЕСТИТЬ В КОМПОНЕНТ
