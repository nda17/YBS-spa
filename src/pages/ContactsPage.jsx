import { ButtonGoBack } from '../components/ui/buttons/ButtonGoBack'
import { useState, useEffect } from 'react'
import { CookiePopup } from '../components/layout/Main/CookiePopup'

const ContactsPage = () => {
	const [show, setShow] = useState(false)
	useEffect(() => {
		const textElement = document.querySelector('.title')
		setTimeout(() => {
			setShow(true)
			textElement.style.opacity = '1'
		}, 1000)
	}, [show])
	return (
		<div className='page'>
			<ButtonGoBack />
			<h3 className='title'>PAGE UNDER DEVELOPMENT</h3>
			<CookiePopup />
		</div>
	)
}

export { ContactsPage }

//////////////////////useState, useEffect ПЕРЕМЕСТИТЬ В КОМПОНЕНТ
