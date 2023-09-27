import { FormMain } from '../components/layout/Main/FormMain'
import { ButtonGoBack } from '../components/ui/buttons/ButtonGoBack'
import { CookiePopup } from '../components/ui/modal/CookiePopup'
const CalculatePricePage = () => {
	return (
		<div className='page'>
			<CookiePopup />
			<ButtonGoBack />
			<FormMain />
		</div>
	)
}

export { CalculatePricePage }
