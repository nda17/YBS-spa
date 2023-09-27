import { CookiePopup } from '../components/ui/modal/CookiePopup'
import { ButtonGoBack } from '../components/ui/buttons/ButtonGoBack'
import { CardServices } from '../components/layout/Main/CardServices'

const ServicesPage = () => {
	return (
		<div className='page'>
			<CookiePopup />
			<ButtonGoBack />
			<CardServices />
		</div>
	)
}

export { ServicesPage }
