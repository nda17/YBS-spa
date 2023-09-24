import { ButtonGoBack } from '../components/ui/buttons/ButtonGoBack'
import { CardServices } from '../components/layout/Main/CardServices'
import { CookiePopup } from '../components/layout/Main/CookiePopup'

const ServicesPage = () => {
	return (
		<div className='page'>
			<ButtonGoBack />
			<CardServices />
			<CookiePopup />
		</div>
	)
}

export { ServicesPage }
