import { FormMain } from '../components/layout/Main/FormMain'
import { ButtonGoBack } from '../components/ui/buttons/ButtonGoBack'
import { CookiePopup } from '../components/layout/Main/CookiePopup'

const CalculatePricePage = () => {
	return (
		<div className='page'>
			<ButtonGoBack />
			<FormMain />
			<CookiePopup />
		</div>
	)
}

export { CalculatePricePage }
