import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import './Contacts.scss'

const Contacts = () => {
	const { t, i18n } = useTranslation()
	const [show, setShow] = useState(false)
	useEffect(() => {
		const textElement = document.querySelector('.title')
		setTimeout(() => {
			setShow(true)
			textElement.style.opacity = '1'
		}, 1000)
	}, [show])
	return <h3 className='title'></h3>
}

export { Contacts }
