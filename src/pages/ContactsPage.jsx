import { ButtonGoBack } from '../components/ui/buttons/ButtonGoBack'
import { useState, useEffect } from 'react'

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
		<>
			<h3 className='title'>PAGE UNDER DEVELOPMENT</h3>
			<ButtonGoBack />
		</>
	)
}

export { ContactsPage }

//FIXME:useState, useEffect ПЕРЕМЕСТИТЬ В КОМПОНЕНТ
